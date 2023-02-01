import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="h-[415px] w-[415px] rounded-3xl bg-darkerblue px-8 py-8 text-lightgrey">
      {props.children}
    </div>
  );
};

export default Card;
