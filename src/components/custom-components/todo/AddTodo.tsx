import { FormEvent, useState } from "react";
import { Button } from "../../ui/button";
import { AddTodoProps } from "@/types/Types";

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full xs:flex items-center gap-2 "
    >
      <input
        type="text"
        className="text-lg px-2 py-1 border border-gray-500 outline-none rounded-md w-full"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button className="uppercase md:px-8 mt-2 xs:mt-0 ml-auto block">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
