import { defaultImageURL } from "@/utils/constant"
import Image from "next/image"
import { FC } from "react"
import { Variant } from "../../../type"

type ImageProps = {
    imageURL?: string
    alt?: string
    height?: number
    width?: number
    variant?: Variant
    handleRemove?: () => void
}

const DynamicImage: FC<ImageProps> = ({ imageURL = defaultImageURL, handleRemove, alt = "Default alt text", variant = "Desktop", height = 300, width = 400 }) => {
    switch (variant) {
        case "Desktop":
            return <figure className="max-w-xl relative" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
                <button onClick={handleRemove} type="button" className="border text-white bg-red-800 absolute -top-2 -right-2 p-1 rounded">Remove</button>
            </figure>
        case "Tablet":
            return <figure className="max-w-lg relative" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
                <button onClick={handleRemove} type="button" className="border text-white bg-red-800 absolute -top-2 -right-2 p-1 rounded">Remove</button>
            </figure>
        case "Mobile":
            return <figure className="max-w-sm relative" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
                <button onClick={handleRemove} type="button" className="border text-white bg-red-800 absolute -top-2 -right-2 p-1 rounded">Remove</button>
            </figure>

        default:
            return null;
    }
}

export default DynamicImage