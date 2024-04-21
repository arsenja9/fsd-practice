import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export type UiButtonVariant = 'primary' | 'secondary' | 'outlined'
export type UiButtonProps = {
  variant: UiButtonVariant

} & ButtonHTMLAttributes<HTMLButtonElement>

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button {...props} className={
      clsx(className, 'px-4 h-10 rounded cursor-pointer gap-2 flex items-center justify-center transition',
        {
          'primary': 'text-white hover:bg-teal-600 bg-teal-500 disabled:opacity-50 shadow shadow-teal-500/30',
          'secondary': 'text-white hover:bg-rose-600 bg-rose-500 disabled:opacity-50 shadow shadow-rose-500/30',
          'outlined': 'border border-slate-300 hover:border-slate-500 disabled:opacity-50',
        }[variant],
      )}
    />
  )
}

