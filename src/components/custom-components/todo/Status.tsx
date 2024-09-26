import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StatusType, StatusProps } from "@/types/Types";

const status: StatusType[] = ["all", "pending", "completed"];

const Status = ({ selectedStatus, setSelectedStatus }: StatusProps) => {
  return (
    <div className="flex gap-4 pt-2">
      <p className="font-semibold text-lg">Status:</p>
      <RadioGroup
        defaultValue={selectedStatus}
        onValueChange={(v) => setSelectedStatus(v)}
        className="flex flex-wrap gap-2"
      >
        {status.map((stat) => (
          <div key={stat} className="flex items-center space-x-2">
            <RadioGroupItem value={stat} id={stat} />
            <Label className="capitalize cursor-pointer" htmlFor={stat}>
              {stat}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Status;
