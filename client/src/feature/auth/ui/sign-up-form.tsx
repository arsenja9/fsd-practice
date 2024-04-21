import React from 'react'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiButton } from '@/shared/ui/ui-button'
import { ROUTES } from '@/shared/constants/routes'
import { UiLink } from '@/shared/ui/ui-link'
import { useSignUpForm } from '../model/use-sign-up-form'

export function SignUpForm() {
  const { isLoading, handleSubmit, register, errorMessage } = useSignUpForm()


  return <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
    <UiTextField
      label='Email'
      inputProps={{ type: 'email', ...register('email'), required: true }} />
    <UiTextField
      label='Password'
      inputProps={{ type: 'password', ...register('password'), required: true }} />
    <UiButton disabled={isLoading} variant='primary'>Sign Up</UiButton>
    <UiLink className='text-center' href={ROUTES.sign_in}>Sign In</UiLink>
    {errorMessage && <div className='text-rose-500 text-center'>{errorMessage}</div>}
  </form>
}

