import { UiButton } from '@/shared/ui/ui-button'
import { useToggleBlocking } from '@/feature/toggle-blocking/model/use-toggle-blocking'

export function ToggleBlockingButton({}) {

  const { toggleBlocking, isBloackingEnabled, isLoading, isReady } = useToggleBlocking()

  if (!isReady){
    return null
  }

  return <UiButton
    onClick={toggleBlocking}
    disabled={isLoading}
    variant={!isBloackingEnabled ? 'primary' : 'secondary'}>{isBloackingEnabled ? 'Enabled' : 'Enabled Blocking'}</UiButton>
}