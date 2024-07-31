import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./InputForm";

type ImageFormProps = {
    imageURL: string
    alt: string
    height: number
    width: number
}

const ImageForm: FC<ImageFormProps> = ({ imageURL, height, width, alt }) => {
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
    const handleFormSubmit = () => {

    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-6">
            <FormInput name="imageURL" placeholder="Image URL" />
            <FormInput name="height" placeholder="Height" />
            <FormInput name="width" placeholder="Width" />
            <FormInput name="alt" placeholder="Alt Text" />
        </form>
    </FormProvider>
};

export default ImageForm