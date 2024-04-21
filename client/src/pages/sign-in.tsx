import React from 'react'
import { SignInForm } from '@/feature/auth'
import { UiHeader } from '@/shared/ui/ui-header'
import { UiFormPageLayout } from '@/pages/layout/ui-form-page-layout'

export function SignIn() {
  return (
    <UiFormPageLayout
      title='Sign In'
      header={<UiHeader />}
      form={<SignInForm />}
    />

  )
}