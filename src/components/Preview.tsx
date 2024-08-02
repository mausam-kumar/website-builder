"use-client"
import DynamicImage from "./elements/Image"
import Button from "./elements/Button"
import { Element } from "../../type"
import EmptyState from "./EmptyState"
import { useCallback, useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import Link from "next/link"

const Preview = ({ templateId }: { templateId: string }) => {
    const [previewState, setPreviewState] = useState<Element[]>(null!)

    const renderAction = ({ type, content }: Element) => {
        switch (type) {
            case "image":
                return <DynamicImage imageURL={content.imageURL} height={Number(content.height || 250)} width={Number(content.width || 500)} />
            case "button":
                return <Button type="button" text={content.text || "Default Text"} height={Number(content.height || 40)} width={Number(content.width || 200)} />
            case "text":
                <div>{content.text}</div>
            default:
                break;
        }
    };

    const renderSavedTemplate = useCallback(() => {
        const res = getCookie("templates") || "[]"
        const savedTemplates = JSON.parse(res)

        const template = savedTemplates.find((_: { id: string, editorState: Element[] }) => _.id === templateId)
        console.log(template)
        if (!!template?.editorState?.length) {
            setPreviewState(template.editorState)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        renderSavedTemplate()
    }, [renderSavedTemplate])

    return <div className="flex-1 relative bg-gray-100 h-[80vh] min-w-screen justify-center flex">
        {!previewState?.length && <div className="pt-20"><EmptyState /></div>}
        <div className="max-w-6xl">
            <div className='flex justify-center gap-x-6'>
                <Link href="/" className='rounded w-fit bg-indigo-600 px-2 py-1 text-md font-md text-white shadow-sm'>Add New Template</Link>
                <Link href="/template" className='rounded w-fit bg-indigo-600 px-2 py-1 text-md font-md text-white shadow-sm'>View Saved template</Link>
            </div>
            {
                previewState?.map((_) => {
                    const { left, top } = _ || {}
                    return <div
                        key={_.id}
                        className="absolute"
                        style={{
                            left,
                            top,
                        }}
                    >
                        {
                            renderAction(_)
                        }
                    </div>
                })
            }
        </div>

    </div>

}

export default Preview