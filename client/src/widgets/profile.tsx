import { SignOutButton } from '@/feature/auth'
import { useSessionQuery } from '@/entities/session/queries'

export function Profile() {
  const { data: session } = useSessionQuery()

  if (!session) null

  return (
    <div className='flex gap-2 items-center'>
      {session?.email}
      <SignOutButton />
    </div>
  )
}