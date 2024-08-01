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
                <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>
            </figure>
        case "Tablet":
            return <figure className="max-w-lg relative" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
                <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>
            </figure>
        case "Mobile":
            return <figure className="max-w-sm relative" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
                <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>
            </figure>

        default:
            return null;
    }
}

export default DynamicImage