import React from 'react'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiButton } from '@/shared/ui/ui-button'
import { ROUTES } from '@/shared/constants/routes'
import { UiLink } from '@/shared/ui/ui-link'
import { useSignInForm } from '../model/use-sign-in-form'

export function SignInForm() {
  const { isLoading, handleSubmit, register, errorMessage } = useSignInForm()


  return <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
    <UiTextField
      label='Email'
      inputProps={{ type: 'email', ...register('email'), required: true }} />
    <UiTextField
      label='Password'
      inputProps={{ type: 'password', ...register('password'), required: true }} />
    <UiButton disabled={isLoading} variant='primary'>Sign In</UiButton>
    <UiLink className='text-center' href={ROUTES.sign_up}>Sign Up</UiLink>
    {errorMessage && <div className='text-rose-500 text-center'>{errorMessage}</div>}
  </form>
}

