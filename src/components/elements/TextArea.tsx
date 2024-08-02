import { defaultTextArea } from "@/utils/constant";
import { FC } from "react";

type TextAreaProps = {
   text? : string
   height?: number
   width?: number
   textColor?: string
   backgroundColor?: string
}

const TextArea: FC<TextAreaProps> = ({ text = defaultTextArea.text, height = defaultTextArea.height, width = defaultTextArea.width, textColor = defaultTextArea.textColor, backgroundColor = defaultTextArea.backgroundColor }) => {
    return <div style={{ height, width, color: textColor, backgroundColor }} className="overflow-hidden border-2 p-4 rounded-md transform transition-all duration-300">
        { text }
    </div>
};

export default TextArea