import { defaultImageURL } from "@/utils/constant"
import Image from "next/image"
import { FC } from "react"

type ImageProps = {
    imageURL?: string
    alt?: string
    height?: number
    width?: number
    handleRemove?: () => void
    showRemoveBtn?: boolean
}

const DynamicImage: FC<ImageProps> = ({ imageURL = defaultImageURL, handleRemove, alt = "Default alt text", showRemoveBtn = false, height = 300, width = 400 }) => {
    return <figure className="max-w-xl relative transform transition-all duration-300" style={{ height, width }}>
        <Image width={width} height={height} style={{ height, width }} className="h-auto max-w-full rounded-lg transform transition-all duration-300" src={imageURL} alt={alt} />
        {showRemoveBtn && <button onClick={handleRemove} className="rounded-full block p-1 bg-white border text-black text-opacity-60 font-semibold absolute -top-4 z-10 -right-1 h-8 w-8">X</button>}
    </figure>
}

export default DynamicImage