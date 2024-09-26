import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

interface ConfirmationModalProps {
  handleDelete: () => void;
  setIsDeleting: Dispatch<SetStateAction<number | null>>;
}

const ConfirmationModal = ({
  handleDelete,
  setIsDeleting,
}: ConfirmationModalProps) => {
  return (
    <div className="fixed w-full h-full grid place-items-center top-0 left-0 bg-black/50">
      <div className="bg-white w-1/2 max-w-96 rounded-md p-4">
        <h2 className="text-xl mb-8">You want to delete the task?</h2>
        <div className="flex justify-end gap-2 text-white font-semibold">
          <Button onClick={() => setIsDeleting(null)}>No</Button>
          <Button variant="destructive" onClick={handleDelete}>
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
