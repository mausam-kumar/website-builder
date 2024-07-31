import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./InputForm";

type ButtonFormProps = {
    text: string
    height: number
    width: number
}

const ButtonForm: FC<ButtonFormProps> = ({ text, height, width }) => {
    const methods = useForm({
        defaultValues: {
            text,
            height,
            width
        },
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;
    const handleFormSubmit = () => {

    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-6">
            <FormInput name="text" placeholder="Text" />
            <FormInput name="height" placeholder="Height" />
            <FormInput name="width" placeholder="Width" />
        </form>
    </FormProvider>
};

export default ButtonForm