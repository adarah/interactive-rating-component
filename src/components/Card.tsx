import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className="bg-darkerblue rounded-xl p-9 text-lightgrey w-[415px] h-[415px]">
            {props.children}
        </div>
    )
}

export default Card