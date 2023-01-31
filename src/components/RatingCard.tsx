import * as RadioGroup from "@radix-ui/react-radio-group";
import Image from "next/image";
import Card from "./Card";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";

export interface Props {
  setScore: (s: string) => void;
}

const RatingCard = ({ setScore }: Props) => {
  const { control, handleSubmit } = useForm();
  return (
    <Card>
      <form
        className="flex h-full flex-col justify-between"
        onSubmit={handleSubmit((data) => setScore(data.score))}
      >
        <figure className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue p-0">
          <Image
            src="images/icon-star.svg"
            alt=""
            width={15}
            height={15}
            className="h-4 w-4"
          />
        </figure>
        <h1 className="text-2xl font-bold text-white">How did we do?</h1>
        <p className="text-lg">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Controller
          name="score"
          control={control}
          render={({ field }) => <ScoreGroup field={field} />}
        />

        <button className="h-11 w-full rounded-full bg-primary font-bold uppercase text-white transition-colors hover:bg-white hover:text-primary">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default RatingCard;

interface ScoreGroupProps {
  field: ControllerRenderProps<FieldValues, "score">;
}
const ScoreGroup = ({
  field: { name, value, onChange, onBlur, ref },
}: ScoreGroupProps) => {
  return (
    <RadioGroup.Root
      name={name}
      value={value}
      onValueChange={onChange}
      onBlur={onBlur}
      ref={ref}
      className="flex justify-between"
    >
      {["1", "2", "3", "4", "5"].map((n) => (
        <RadioGroup.Item
          key={n}
          value={n}
          id={`r${n}`}
          className="h-12 w-12 rounded-full bg-darkblue transition-colors hover:bg-lightgrey hover:text-white checked:bg-primary checked:text-white"
        >
          <label htmlFor={`r${n}`}>{n}</label>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
