import { FC } from "react";
import { defaultButton } from "@/utils/constant";

type ButtonProps = {
    onClick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
    height?: number
    width?: number
    textColor?: string
    handleRemove?: () => void
    showCloseBtn?: boolean
    backgroundColor?: string
}

const Button: FC<ButtonProps> = ({ onClick, handleRemove, backgroundColor = "#334155", showCloseBtn = false, text = "Button Text", textColor = "white", type = "button", height = defaultButton.height, width = defaultButton.width }) => {
    return <div className="relative w-fit border">
        <button
            type={type}
            onClick={onClick}
            style={{ height, width, color: textColor, backgroundColor }}
            className="rounded w-fit bg-slate-700 px-2 py-1 text-md font-semibold shadow-sm"
        >
            {text}
        </button>
        {showCloseBtn && <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>}
    </div>
};

export default Button