import { defaultTextArea } from "@/utils/constant";
import { FC } from "react";

type TextAreaProps = {
   text? : string
   height?: number
   width?: number
   textColor?: string
   backgroundColor?: string
   handleRemove?: () => void
   showRemoveBtn?: boolean
}

const TextArea: FC<TextAreaProps> = ({ text = defaultTextArea.text, showRemoveBtn = false, handleRemove, height = defaultTextArea.height, width = defaultTextArea.width, textColor = defaultTextArea.textColor, backgroundColor = defaultTextArea.backgroundColor }) => {
    return <div style={{ height, width, color: textColor, backgroundColor }} className="overflow-hidden border-2 p-4 rounded-md transform transition-all duration-300">
        { text }
        {showRemoveBtn && <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>}
    </div>
};

export default TextArea