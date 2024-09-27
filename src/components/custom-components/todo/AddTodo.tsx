import { FormEvent, useState } from "react";
import { AddTodoProps } from "@/types/Types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!task.trim()) {
      setError(true);
      return;
    }
    addTodo(task);
    setTask("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full xs:flex items-center gap-2 "
    >
      <Input
        className={`${error ? "border-red-500 placeholder:text-red-500" : ""}`}
        placeholder="Task"
        value={task}
        onChange={(e) => {
          setError(false);
          setTask(e.target.value);
        }}
      />
      <Button className="uppercase md:px-8 mt-2 xs:mt-0 ml-auto block">
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
