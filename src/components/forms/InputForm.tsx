import { useController } from "react-hook-form";

const FormInput = ({
    name,
    placeholder,
    type = "text",
}: {
    name: string;
    placeholder?: string;
    type?: string;
}) => {
    const { field, fieldState } = useController({ name });
    return (
        <div className="w-full">
            <div className="relative">
                <label
                    htmlFor={name}
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-sm text-gray-900 uppercase font-semibold"
                >
                    {placeholder}
                </label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    className="block w-full rounded-md border-0 p-2 text-gray-700 text-gray-1 shadow-sm ring-1 ring-inset ring-green-3 disabled:bg-slate-100 disabled:cursor-not-allowed focus:ring-green-1 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

export default FormInput