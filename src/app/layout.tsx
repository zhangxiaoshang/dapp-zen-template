import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Web3Modal } from '@/context/Web3Modal'
import { AppNotistack } from '@/context/Notistack'
import NProgress from '@/components/nprogress/NProgress'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zen Dapp Template',
  description: 'A simple dapp template with nextjs and web3modal with wagmi2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgress></NProgress>
        <AppNotistack></AppNotistack>

        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  )
}
