import { Dispatch, SetStateAction } from "react";

export interface Todo {
  task: string;
  _id: number;
  status: "pending" | "completed";
}

export interface AppTitleProps {
  title: string;
}

export interface AddTodoProps {
  addTodo: (todo: string) => void;
}

export type StatusType = "all" | "pending" | "completed";

export interface StatusProps {
  selectedStatus: string;
  setSelectedStatus: Dispatch<SetStateAction<string>>;
}

export interface TodoContainerProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  handleTaskDone: (_id: number) => void;
  handleUpdateTask: (task: Todo) => void;
  handleDeleteTask: (_id: number) => void;
}
