export type Todo = {
    id: number;
    deadline: string;
    task: string;
    title: string;
    status: boolean;
    createDate: string;
  };
export type TodoItemProps = {
    todo: Todo;
    onUpdate: (todo: Todo) => void;
    onDelete: (id: number) => void;
  };
export type TodoFormProps = {
    onAdd: (todo: {
      deadline: string;
      task: string;
      title: string;
      status: boolean;
      createDate: string;
    }) => void;
  };