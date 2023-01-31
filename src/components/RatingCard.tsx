import * as RadioGroup from '@radix-ui/react-radio-group'
import Image from 'next/image'
import Card from './Card'
import { useForm, Controller, ControllerRenderProps, FieldValues } from 'react-hook-form'

export interface Props {
    setScore: (s: string) => void
}

const RatingCard = ({ setScore }: Props) => {
    const { control, handleSubmit } = useForm()
    return (
        <Card>
            <form
                className='flex flex-col justify-between h-full'
                onSubmit={handleSubmit(data => setScore(data.score))}
            >
                <figure className="bg-darkblue rounded-full p-0 w-10 h-10 flex justify-center items-center">
                    <Image src="images/icon-star.svg" alt="" width={15} height={15} className="w-auto h-auto" />
                </figure>
                <h1 className="text-white text-xl font-bold">How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <Controller
                    name="score"
                    control={control}
                    render={({ field }) => <ScoreGroup field={field} />}
                />

                <button className="uppercase font-bold bg-primary text-white w-full rounded-full h-11 hover:bg-white hover:text-primary transition-colors">
                    Submit
                </button>
            </form>
        </Card>
    )
}

export default RatingCard

interface ScoreGroupProps {
    field: ControllerRenderProps<FieldValues, 'score'>
}
const ScoreGroup = ({ field: { name, value, onChange, onBlur, ref } }: ScoreGroupProps) => {
    return (
        <RadioGroup.Root
            name={name}
            value={value}
            onValueChange={onChange}
            onBlur={onBlur}
            ref={ref}
            className="flex justify-between">
            {["1", "2", "3", "4", "5"].map(n => (
                <RadioGroup.Item key={n} value={n} id={`r${n}`} className="bg-darkblue rounded-full w-12 h-12 hover:bg-lightgrey hover:text-white checked:bg-primary checked:text-white transition-colors">
                    <label htmlFor={`r${n}`}>{n}</label>
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    )
} 