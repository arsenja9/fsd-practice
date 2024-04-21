import { useMutation } from '@tanstack/react-query'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { useRouter } from 'next/router'
import { useResetSession } from '@/entities/session'


export function useSignOut() {
  const resetSession = useResetSession()
  const router = useRouter()

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.sign_in)
      resetSession()
    },
  })

  return {
    isLoading: signOutMutation.isLoading,
    signOut: signOutMutation.mutate,
  }
}

