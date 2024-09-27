import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormProps } from "@/types/Types";
import { FormEvent, useState } from "react";

const Form = ({ searchCity }: FormProps) => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!city.trim()) {
      return;
    }
    searchCity(city);
    setCity("");
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full xs:flex items-center gap-2 "
    >
      <Input
        // className={`${error ? "border-red-500 placeholder:text-red-500" : ""}`}
        placeholder="City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <Button className="uppercase md:px-8 mt-2 xs:mt-0 ml-auto block">
        Search
      </Button>
    </form>
  );
};

export default Form;
