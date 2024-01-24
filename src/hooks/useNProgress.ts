import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'

export default function useNProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
  }, [])

  useEffect(() => {
    NProgress.start()
  }, [pathname])

  useEffect(() => {
    NProgress.done()
  }, [searchParams])
}
