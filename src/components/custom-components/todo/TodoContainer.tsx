import { CheckCheck, GripVertical, Pencil, Trash } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";
import ConfirmationModal from "../../shared/ConfirmationModal";
import { Button } from "../../ui/button";

interface Todo {
  task: string;
  _id: number;
  status: "pending" | "completed";
}

interface TodoContainerProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  handleTaskDone: (_id: number) => void;
  handleUpdateTask: (task: Todo) => void;
  handleDeleteTask: (_id: number) => void;
}

const TodoContainer = ({
  todos,
  setTodos,
  handleTaskDone,
  handleUpdateTask,
  handleDeleteTask,
}: TodoContainerProps) => {
  const [isUpdating, setIsUpdating] = useState<Todo | null>(null);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleTaskUpdate = (val: string) => {
    if (isUpdating) {
      setIsUpdating((prevTask) => ({ ...prevTask!, task: val }));
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
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  if (isUpdating) {
                    handleUpdateTask(isUpdating);
                    setIsUpdating(null);
                  }
                }}
                className="w-full flex items-center gap-2"
              >
                <input
                  type="text"
                  className="text-lg px-2 py-1 border border-gray-500 outline-none rounded-md w-full"
                  placeholder="Task"
                  value={isUpdating.task}
                  onChange={(e) => handleTaskUpdate(e.target.value)}
                />
                <Button className="uppercase md:px-8">Save</Button>
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
