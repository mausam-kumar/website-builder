import { FC } from "react";

type ButtonProps = {
    onclick?: () => void
    text?: string
    type?: HTMLButtonElement["type"]
    variant?: "primary" | "secondary"
    height?: number
    width?: number
}

const Button: FC<ButtonProps> = ({ onclick, text = "Button Text", type = "button", variant = "primary", height = 40, width = 100 }) => {
    switch (variant) {
        case "primary":
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className={`rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
            >
                {text}
            </button>
        case "secondary":
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
            >
                {text}
            </button>
        default:
            return <button
                type={type}
                onClick={onclick}
                style={{ height, width }}
                className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                {text}
            </button>;
    }
};

export default Button