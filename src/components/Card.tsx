import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className="bg-darkerblue rounded-xl px-6 py-8 text-lightgrey w-[415px] h-[415px]">
            {props.children}
        </div>
    )
}

export default Card