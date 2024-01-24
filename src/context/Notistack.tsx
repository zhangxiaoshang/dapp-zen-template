'use client'
import { Custom, Error, Success } from '@/components/notistack'
import { SnackbarProvider } from 'notistack'

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
        info: Custom,
      }}
    />
  )
}
