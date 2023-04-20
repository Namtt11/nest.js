import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Todo } from '../types/types';

type TodoFormProps = {
  onAdd: (todo: Todo) => void;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [deadline, setDeadline] = useState('');
  const [task, setTask] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = new Date();
    const createDate = now.toISOString();
    const status = false;
    const id = now.getTime();
    onAdd({ id, deadline, task, title, status, createDate });
    setDeadline('');
    setTask('');
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
}
