"use client"
import EmptyState from "@/components/EmptyState";
import Button from "@/components/elements/Button";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const Templates = () => {
    const resp = useParams()

    console.log(resp.id)
    const res = getCookie("templates") || "[]"
    const savedTemplates = useMemo(() => JSON.parse(res), [res])

    if (!savedTemplates.length) {
        return <EmptyState />
    }

    return <div>
        <div className='flex justify-center'>
            <Link href="/" className='rounded w-fit bg-indigo-600 px-2 py-1 text-md font-md text-white shadow-sm'>Add New Template</Link>
        </div>
        <div className="grid grid-cols-2 place-content-center mt-10">
            {
                savedTemplates.map(({ id }: { id: string, editorState: Element[] }) => {
                    return <div key={id} className="w-fit border rounded-sm p-4">
                        <p>{id}</p>
                        <div className="flex gap-x-4 mt-4">
                            <Link href={`/?templateId=${id}`} className='rounded w-full text-center bg-slate-700 p-2 text-md font-md text-white shadow-sm'>Edit</Link>
                            <Link href={`/template/${id}`} className='rounded w-full text-center bg-slate-700 p-2 text-md font-md text-white shadow-sm'>View</Link>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
};

export default Templates