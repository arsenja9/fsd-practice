import React from 'react'
import { UiButton } from '@/shared/ui/ui-button'
import { useSignOut } from '@/feature/auth/model/use-sign-out'

export function SignOutButton() {
  const { signOut, isLoading } = useSignOut()

  return (
    <UiButton disabled={isLoading} onClick={() => signOut({})} variant='outlined'>Sign Out</UiButton>
  )
}
