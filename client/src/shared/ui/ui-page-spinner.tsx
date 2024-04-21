import clsx from 'clsx'
import { UiSpinner } from '@/shared/ui/ui-spinner'

export function UiPageSpinner({ classname }: { classname?: string }) {
  return <div className={clsx('fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100', classname)}>
    <UiSpinner className='text-teal-600 w-24 h-24' />
  </div>
}