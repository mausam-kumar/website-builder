"use client"
import { useParams } from "next/navigation";


const PreviewPage = () => {
    const res = useParams()

    console.log(res.id)
    return <p>Preview Page {res.id}</p>
};

export default PreviewPage