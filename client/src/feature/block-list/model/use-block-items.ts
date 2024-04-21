import { useState } from 'react'
import { useDebounceValue } from '@/shared/lib/react-std'
import { useBlockListQuery } from '@/entities/block-list'

export function UseBlockItems() {
  const [q, setQ] = useState('')

  const blockListQuery = useBlockListQuery({ q: useDebounceValue (q, 400) })

  const items = blockListQuery.data?.items ?? []

  return { items, isLoading: blockListQuery.isLoading, setQ, q }
}

