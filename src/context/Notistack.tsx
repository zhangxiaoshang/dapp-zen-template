'use client'
import { SnackbarProvider } from 'notistack'
import { Success, Error } from '@/components/notistack/Notistack'
import Info from '@/components/notistack/Info'

export function AppNotistack() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        horizontal: 'center' as const,
        vertical: 'top' as const,
      }}
      Components={{
        success: Success,
        error: Error,
        info: Info,
      }}
    />
  )
}
