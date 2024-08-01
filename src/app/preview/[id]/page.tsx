import Preview from "@/components/Preview";
import { useParams } from "next/navigation";


const PreviewTemplate = () => {
    const res = useParams()
    const templateId = res.id as string
    return <Preview templateId={templateId} />
};

export default PreviewTemplate