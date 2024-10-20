import { useEffect, useState } from "react";
import TodoContainer from "../components/custom-components/todo/TodoContainer";
import AppTitle from "@/components/shared/AppTitle";
import BackButton from "@/components/shared/BackButton";
import Status from "@/components/custom-components/todo/Status";
import { Todo } from "@/types/Types";
import { useLocation } from "react-router-dom";
import SmallForm from "@/components/shared/SmallForm";

const Todos = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([
    {
      task: "Demo task",
      _id: 1,
      status: "pending",
    },
  ]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const location = useLocation();

  const addTodo = (task: string) => {
    setAllTodos((pre) => [
      ...pre,
      { task, _id: Date.now(), status: "pending" },
    ]);
  };

  const handleTaskDone = (_id: number) => {
    setAllTodos((prevTask) =>
      prevTask.map((task) =>
        task._id === _id
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  };

  const handleUpdateTask = (task: Todo) => {
    setAllTodos((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask._id === task._id ? task : prevTask))
    );
  };

  const handleDeleteTask = (_id: number) => {
    setAllTodos((prevTasks) => prevTasks.filter((task) => task._id !== _id));
  };

  useEffect(() => {
    if (selectedStatus === "pending") {
      setTodos(allTodos.filter((todo) => todo.status === "pending"));
    } else if (selectedStatus === "completed") {
      setTodos(allTodos.filter((todo) => todo.status === "completed"));
    } else {
      setTodos(allTodos);
    }
  }, [allTodos, selectedStatus]);

  return (
    <div
      className={`w-full max-w-[800px] mx-auto border-gray-500 rounded-lg p-2 md:p-8 relative ${
        location.pathname.replace("/", "") ? "border" : ""
      }`}
    >
      <BackButton />
      <AppTitle title="todo app" />
      <SmallForm buttonText="add" dispatchSubmit={addTodo} placeholder="Task" />
      <Status
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      {todos.length > 0 && location.pathname.replace("/", "") && (
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
