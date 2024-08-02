"use-client"
import DynamicImage from "./elements/Image"
import Button from "./elements/Button"
import { Element } from "../../type"
import EmptyState from "./EmptyState"
import { useCallback, useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { defaultButton, defaultImage, defaultTextArea } from "@/utils/constant"
import TextArea from "./elements/TextArea"

const Preview = ({ templateId }: { templateId: string }) => {
    const [previewState, setPreviewState] = useState<Element[]>(null!)

    const renderAction = ({ type, content }: Element) => {
        switch (type) {
            case "image":
                return <DynamicImage imageURL={content.imageURL} height={Number(content.height || defaultImage.height)} width={Number(content.width || defaultImage.width)} />
            case "button":
                return <Button type="button" text={content.text || "Default Text"} height={Number(content.height || defaultButton.height)} width={Number(content.width || defaultButton.width)} />
            case "text":
                <TextArea text={content.text || defaultTextArea.text} height={Number(content.height || defaultButton.height)} width={Number(content.width || defaultButton.width)} backgroundColor={content.backgroundColor || defaultButton.backgroundColor} textColor={content.textColor || defaultButton.textColor} />;
            default:
                return null;
        }
    };

    const renderSavedTemplate = useCallback(() => {
        const res = getCookie("templates") || "[]"
        const savedTemplates = JSON.parse(res)

        const template = savedTemplates.find((_: { id: string, editorState: Element[] }) => _.id === templateId)
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
            {!!previewState?.length && <div className='flex justify-center gap-x-6'>
                <Link href="/" className="text-sm font-md rounded-sm py-2 px-4 border-2 uppercase leading-6 text-gray-900">
                    Add New Template
                </Link>
                <Link href="/template" className="text-sm font-md rounded-sm py-2 px-4 border-2 uppercase leading-6 text-gray-900">
                    View Saved template
                </Link>
            </div>}
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