import { PlusIcon } from '@heroicons/react/20/solid'
import FolderIcon from './icons'
import Link from 'next/link'

const EmptyState = () =>  {
  return (
    <div className="text-center">
      <FolderIcon />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          New Project
        </Link>
      </div>
    </div>
  )
}

export default EmptyState