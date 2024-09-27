import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SmallFormProps } from "@/types/Types";

const SmallForm = ({
  placeholder,
  buttonText,
  dispatchSubmit,
}: SmallFormProps) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!value.trim()) {
      setError(true);
      return;
    }
    dispatchSubmit(value);
    setValue("");
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full xs:flex items-center gap-2 "
    >
      <Input
        className={`${error ? "border-red-500 placeholder:text-red-500" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setError(false);
          setValue(e.target.value);
        }}
      />
      <Button className="uppercase md:px-8 mt-2 xs:mt-0 ml-auto block">
        {buttonText}
      </Button>
    </form>
  );
};

export default SmallForm;
