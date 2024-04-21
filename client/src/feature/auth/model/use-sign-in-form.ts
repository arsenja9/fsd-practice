import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignIn } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'

export function useSignInForm() {
  const router = useRouter()

  const { register, handleSubmit } = useForm<{
    email: string,
    password: string
  }>()

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.home)
    },
  })

  const errorMessage = signInMutation.error ? 'Sign up failed' : undefined

  return {
    errorMessage,
    register,
    handleSubmit: handleSubmit(data => signInMutation.mutate(data)),
    isLoading: signInMutation.isLoading,
  }
}