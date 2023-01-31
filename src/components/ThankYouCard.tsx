import Image from 'next/image'
import Card from './Card'

interface Props {
    score: string
}

const ThankYouCard = ({ score }: Props) => {
    return (
        <Card>
            <div className='flex flex-col justify-around items-center h-full'>
                <Image src="images/illustration-thank-you.svg" width={150} height={100} alt="" />
                <div className="bg-darkblue rounded-full p-3 h-8 flex items-center">
                    <span className="text-primary">You selected {score} out of 5</span>
                </div>

                <h1 className="text-white text-2xl font-bold"> Thank you! </h1>

                <p className="text-lightgrey text-lg text-center w-96">
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                </p>
            </div>
        </Card>
    )
}

export default ThankYouCard