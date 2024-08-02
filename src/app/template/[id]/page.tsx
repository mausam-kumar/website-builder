"use client"
import Preview from "@/components/Preview";
import { useParams } from "next/navigation";


const PreviewPage = () => {
    const res = useParams()

    return <Preview templateId={`${res.id}`} />
};

export default PreviewPage