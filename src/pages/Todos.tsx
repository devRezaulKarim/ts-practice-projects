import { useState } from "react";
import AddTodo from "../components/custom-components/todo/AddTodo";
import TodoContainer from "../components/custom-components/todo/TodoContainer";
import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";

interface Todo {
  task: string;
  _id: number;
  status: "pending" | "done";
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    setTodos((pre) => [...pre, { task, _id: Date.now(), status: "pending" }]);
  };

  const handleTaskDone = (_id: number) => {
    setTodos((prevTask) =>
      prevTask.map((task) =>
        task._id === _id
          ? { ...task, status: task.status === "done" ? "pending" : "done" }
          : task
      )
    );
  };

  const handleUpdateTask = (task: Todo) => {
    setTodos((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask._id === task._id ? task : prevTask))
    );
  };

  const handleDeleteTask = (_id: number) => {
    setTodos((prevTasks) => prevTasks.filter((task) => task._id !== _id));
  };

  return (
    <div className="w-full max-w-[800px] mx-auto border border-gray-500 rounded-lg p-2 md:p-8 relative">
      <BackButton />
      <AppTitle title="todo app" />
      <AddTodo addTodo={addTodo} />
      {todos.length > 0 && (
        <TodoContainer
          todos={todos}
          setTodos={setTodos}
          handleTaskDone={handleTaskDone}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default Todos;
