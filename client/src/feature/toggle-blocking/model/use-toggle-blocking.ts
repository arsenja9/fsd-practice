import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account'

export function useToggleBlocking() {
  const accountQuery = useAccountQuery()

  const updateAccountMutation = useUpdateAccountMutation()


  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBloackingEnabled: !accountQuery.data?.isBloackingEnabled,
      })
    }
  }

  return {
    isLoading: updateAccountMutation.isLoading,
    toggleBlocking,
    isBloackingEnabled: accountQuery.data?.isBloackingEnabled ?? false,
    isReady: accountQuery.isSuccess,
  }
}