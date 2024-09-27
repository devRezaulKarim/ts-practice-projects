import { CheckCheck, GripVertical, Pencil, Save, Trash, X } from "lucide-react";
import { FormEvent, MouseEvent, useRef, useState } from "react";
import ConfirmationModal from "../../shared/ConfirmationModal";
import { Button } from "../../ui/button";
import { Todo, TodoContainerProps } from "@/types/Types";
import { Input } from "@/components/ui/input";

const TodoContainer = ({
  todos,
  setTodos,
  handleTaskDone,
  handleUpdateTask,
  handleDeleteTask,
}: TodoContainerProps) => {
  const [isUpdating, setIsUpdating] = useState<Todo | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleTaskUpdate = (val: string) => {
    if (isUpdating) {
      setIsUpdating((prevTask) => ({ ...prevTask!, task: val }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUpdating) {
      if (!isUpdating.task.trim()) {
        setError(true);
        return;
      }
      handleUpdateTask(isUpdating);
      setIsUpdating(null);
    }
  };

  const handleDelete = () => {
    if (isDeleting) {
      handleDeleteTask(isDeleting);
      setIsDeleting(null);
    }
  };

  const onDragStart = (i: number) => {
    draggingItem.current = i;
  };
  const onDragEnter = (i: number) => {
    dragOverItem.current = i;
  };
  const onDragEnd = () => {
    if (draggingItem.current !== null && dragOverItem.current !== null) {
      const list = [...todos];
      const draggedItem = list[draggingItem.current];
      list.splice(draggingItem.current, 1);
      list.splice(dragOverItem.current, 0, draggedItem);
      setTodos(list);
    }
    draggingItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <>
      {isDeleting && (
        <ConfirmationModal
          handleDelete={handleDelete}
          setIsDeleting={setIsDeleting}
        />
      )}
      <ul className="mt-4 border border-gray-500 rounded-md overflow-hidden text-lg capitalize text-gray-700">
        {todos.map((todo, i) => (
          <li
            onDragStart={() => onDragStart(i)}
            onDragEnter={() => onDragEnter(i)}
            onDragEnd={onDragEnd}
            draggable={isDraggable}
            key={todo._id}
            className={`${
              i % 2 === 0
                ? "bg-gray-200 hover:bg-gray-50"
                : "bg-gray-100 hover:bg-gray-50"
            } p-2 mt-[1px] flex items-center justify-between ${
              todo.status === "completed"
                ? i % 2 === 0
                  ? "bg-green-200 hover:bg-green-50"
                  : "bg-green-100 hover:bg-green-50"
                : ""
            }`}
          >
            {isUpdating && isUpdating._id === todo._id ? (
              <form
                action=""
                onSubmit={handleSubmit}
                className="w-full flex items-center gap-2"
              >
                <Input
                  className={`${
                    error ? "border-red-500 placeholder:text-red-500" : ""
                  }`}
                  placeholder="Task"
                  value={isUpdating.task}
                  onChange={(e) => {
                    setError(false);
                    handleTaskUpdate(e.target.value);
                  }}
                />
                <Button className="uppercase p-1 h-auto md:h-9 md:px-4 flex items-center gap-1">
                  <Save size={16} />
                  <span className="hidden md:block">Save</span>
                </Button>
                <Button
                  onClick={(event: MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    setIsUpdating(null);
                  }}
                  variant="destructive"
                  className="uppercase p-1 h-auto md:h-9 md:px-4 flex items-center gap-1"
                >
                  <X size={18} />
                  <span className="hidden md:block">Cancel</span>
                </Button>
              </form>
            ) : (
              <>
                <p
                  className={`${
                    todo.status === "completed" ? "line-through italic" : ""
                  }`}
                >
                  {todo.task}
                </p>
                <div className="flex items-center gap-1 xs:gap-2 md:gap-3">
                  <Button
                    variant="ghost"
                    size="zero"
                    onClick={() => handleTaskDone(todo._id)}
                    aria-label="Mark task as completed"
                  >
                    <CheckCheck
                      size={20}
                      color="green"
                      className="active:scale-75 duration-200"
                    />
                  </Button>
                  {todo.status !== "completed" && (
                    <Button
                      variant="ghost"
                      size="zero"
                      onClick={() => setIsUpdating(todo)}
                      aria-label="Edit task"
                    >
                      <Pencil
                        size={20}
                        color="orange"
                        className="active:scale-75 duration-200"
                      />
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    size="zero"
                    onClick={() => setIsDeleting(todo._id)}
                    aria-label="Delete task"
                  >
                    <Trash
                      size={20}
                      color="red"
                      className="active:scale-75 duration-200"
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="zero"
                    className="cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      setIsDraggable(true);
                    }}
                    onMouseUp={(e) => {
                      e.stopPropagation();
                      setIsDraggable(false);
                    }}
                  >
                    <GripVertical />
                  </Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoContainer;
