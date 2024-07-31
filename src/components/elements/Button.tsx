import { FC } from "react";

type ButtonProps = {
    onclick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
    variant?: Variant
    height?: number
    width?: number
}

const Button: FC<ButtonProps> = ({ onclick, text = "Button Text", type = "button", variant = "Desktop", height = 40, width = 200 }) => {
    switch (variant) {
        case "Mobile":
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className={`rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
            >
                {text}
            </button>
        case "Desktop":
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className="rounded bg-slate-700 px-2 py-1 text-md font-semibold text-white shadow-sm hover:bg-white/20"
            >
                {text}
            </button>
        default:
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                {text}
            </button>;
    }
};

export default Button