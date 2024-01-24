'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { cookieStorage, createStorage, State, WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, sepolia, bscTestnet } from 'wagmi/chains'
import { type Chain } from 'viem/chains'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  verifyUrl: '',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains: [Chain, ...Chain[]] = [mainnet, arbitrum, sepolia, bscTestnet]
const wagmiConfig = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    // https://docs.walletconnect.com/web3modal/nextjs/theming
  },
})

export function Web3Modal({
  children,
  initialState,
}: {
  children: React.ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
