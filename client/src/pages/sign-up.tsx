import React from 'react'
import { SignUpForm } from '@/feature/auth'
import { UiHeader } from '@/shared/ui/ui-header'
import { UiFormPageLayout } from '@/pages/layout/ui-form-page-layout'

export function SignUp() {
  return (
    <UiFormPageLayout
      title='Sign Up'
      header={<UiHeader />}
      form={<SignUpForm />}
    />

  )
}