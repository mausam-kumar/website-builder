import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./InputForm";
import { useEditorStateContext } from "@/context/EditorStateProvider";
import { useSelectedElementStateContext } from "@/context/SelectedElementStateProvider";
import Button from "../elements/Button";

type ImageFormProps = {
    imageURL: string
    alt: string
    height: string
    width: string
}

const ImageForm: FC<ImageFormProps> = ({ imageURL, height, width, alt }) => {
    const { editorState, setEditorState } = useEditorStateContext()
    const { selectedElement } = useSelectedElementStateContext()
    const methods = useForm({
        defaultValues: {
            imageURL,
            height,
            width,
            alt
        },
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;
    const handleFormSubmit = (formData: ImageFormProps) => {
        const { height, width, alt, imageURL } = formData || {}
        const updatedState = editorState.map((_) => {
            if (_.id === selectedElement?.id) {
                return { ..._, content: {..._.content, height, width, alt, imageURL } }
            }else{
                return _
            }
        })
        setEditorState(updatedState)
    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-6">
            <FormInput name="imageURL" placeholder="Image URL" />
            <FormInput name="height" placeholder="Height" />
            <FormInput name="width" placeholder="Width" />
            <FormInput name="alt" placeholder="Alt Text" />
            <Button type="submit" text="Apply" />
        </form>
    </FormProvider>
};

export default ImageForm