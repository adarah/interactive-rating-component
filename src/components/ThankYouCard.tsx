import Image from "next/image";
import Card from "./Card";

interface Props {
  score: string;
}

const ThankYouCard = ({ score }: Props) => {
  return (
    <Card>
      <div className="flex h-full flex-col items-center justify-around">
        <Image
          src="images/illustration-thank-you.svg"
          width={150}
          height={100}
          alt=""
        />
        <div className="flex h-8 items-center rounded-full bg-darkblue p-3">
          <span className="text-primary">You selected {score} out of 5</span>
        </div>

        <h1 className="text-2xl font-bold text-white"> Thank you! </h1>

        <p className="w-96 text-center text-lg text-lightgrey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
};

export default ThankYouCard;
