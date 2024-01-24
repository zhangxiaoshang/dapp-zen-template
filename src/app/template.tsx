'use client'
import useNProgress from '@/hooks/useNProgress'

export default function RootTemplate({ children }: React.PropsWithChildren) {
  useNProgress()

  return children
}
