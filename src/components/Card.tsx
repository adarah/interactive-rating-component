import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="h-[415px] w-[415px] rounded-3xl px-8 py-8 text-lightgrey bg-gradient-to-b from-lighterblue to-darkerblue">
      {props.children}
    </div>
  );
};

export default Card;
