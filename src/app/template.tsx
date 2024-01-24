'use client'
import useNProgress from '@/hooks/useNProgress'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  useNProgress()

  return children
}
