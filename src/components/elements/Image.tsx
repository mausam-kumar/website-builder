import { defaultImageURL } from "@/utils/constant"
import Image from "next/image"
import { FC } from "react"

type ImageProps = {
    imageURL?: string
    alt?: string
    variant?: Variant
    height?: number
    width?: number
}

const DynamicImage: FC<ImageProps> = ({ imageURL = defaultImageURL, alt = "Default alt text", variant = "Desktop", height = 400, width = 600 }) => {
    switch (variant) {
        case "Desktop":
            return <figure className="max-w-xl" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
            </figure>
        case "Tablet":
            return <figure className="max-w-lg" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
            </figure>
        case "Mobile":
            return <figure className="max-w-sm" style={{ height, width }}>
                <Image width={width} height={height} className="h-auto max-w-full rounded-lg" src={imageURL} alt={alt} />
            </figure>

        default:
            return null;
    }
}

export default DynamicImage