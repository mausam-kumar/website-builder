import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./InputForm";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import Button from "../elements/Button";

type TextAreaFormProps = {
   text: string
   height: string
   width: string
   textColor: string
   backgroundColor: string
}

const TextAreaForm: FC<TextAreaFormProps> = ({ text, height, width, textColor, backgroundColor }) => {
    const { editorState, setEditorState } = useEditorStateContext()
    const { selectedElement } = useSelectedElementStateContext()
    const methods = useForm({
        defaultValues: {
            text,
            height,
            width,
            textColor,
            backgroundColor
        },
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;
    const handleFormSubmit = (formData: TextAreaFormProps) => {
        const { height, width, text, textColor, backgroundColor } = formData || {}
        const updatedState = editorState.map((_) => {
            if (_.id === selectedElement?.id) {
                return { ..._, content: {..._.content, height, width, text, textColor, backgroundColor } }
            }else{
                return _
            }
        })
        setEditorState(updatedState)
    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-6">
            <FormInput name="text" placeholder="Text" />
            <FormInput name="height" placeholder="Height" />
            <FormInput name="width" placeholder="Width" />
            <FormInput name="textColor" placeholder="Text color" />
            <FormInput name="backgroundColor" placeholder="Background color" />
            <Button type="submit" text="Apply" />
        </form>
    </FormProvider>
};

export default TextAreaForm