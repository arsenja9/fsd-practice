import React from 'react'
import { useAddBlockItemForm } from '../model/use-add-block-item-form'
import { UiSelectField } from '@/shared/ui/ui-select-field'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiButton } from '@/shared/ui/ui-button'
import { AddBlockItemDtoType } from '@/shared/api/generated'

const typeOptions = [
  {label: 'WebSite', value: AddBlockItemDtoType.Website},
  {label: 'KeyWord', value: AddBlockItemDtoType.KeyWord}

]

export function AddBlockItemForm() {
  const { handleSubmit, type, isLoading, register } = useAddBlockItemForm()

  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
      <UiSelectField options={typeOptions} className='grow min-w-[200px]' selectProps={{ ...register('type') }} />
      <UiTextField
        className='grow'
        inputProps={{ placeholder: type === 'KeyWord' ? 'Enter Key World...' : 'Enter Website', ...register('data') }} />
      <UiButton disabled={isLoading} variant='primary'>Add Block Item</UiButton>
    </form>
  )
}

