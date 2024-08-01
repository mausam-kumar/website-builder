import { FC } from "react";
import { Variant } from "../../../type";

type ButtonProps = {
    onClick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
    variant?: Variant
    height?: number
    width?: number
    handleRemove?: () => void
    showCloseBtn?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, handleRemove, showCloseBtn = false, text = "Button Text", type = "button", variant = "Desktop", height = 40, width = 200 }) => {
    switch (variant) {
        case "Mobile":
            return <div className="relative w-fit">
                <button
                    type={type}
                    onClick={onClick}
                    style={{ height, width }}
                    className={`rounded bg-slate-700 px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300`}
                >
                    {text}
                </button>
                {showCloseBtn && <button onClick={handleRemove} type="button" className="rounded-full p-1.5 bg-red-800 text-white font-semibold absolute -top-1 z-10 -right-1">X</button>}
            </div>
        case "Desktop":
            return <div className="relative w-fit">
                <button
                    type={type}
                    onClick={onClick}
                    style={{ height, width }}
                    className="rounded w-fit bg-slate-700 px-2 py-1 text-md font-semibold text-white shadow-sm"
                >
                    {text}
                </button>
                {showCloseBtn && <button onClick={handleRemove} className="rounded-full block p-1 bg-red-800 text-white font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>}
            </div>
        default:
            return <div className="relative w-fit">
                <button
                    type={type}
                    onClick={onClick}
                    style={{ height, width }}
                    className="rounded relative bg-slate-700 px-2 py-1 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300"
                >
                    {text}
                </button>;
                {showCloseBtn && <button onClick={handleRemove} className="rounded-full p-1 bg-red-800 text-white absolute -top-4 z-10 -right-1">X</button>}
            </div>
    }
};

export default Button