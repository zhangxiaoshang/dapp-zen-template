'use client'
import { formatEther } from 'viem'
import { useBlockNumber } from 'wagmi'
import { useReadErc20BalanceOf } from '@/generated'
import { useEffect } from 'react'

const token = '0x36C97a9F9F0628BCc12cD3ebE7555bF9940Fc8c5'
export function ReadTokenBalance() {
  const { data: blockNumber } = useBlockNumber()

  const { data: balance, refetch } = useReadErc20BalanceOf({
    chainId: 97,
    address: token,
    args: ['0xEd33d5E48F5F54B7d36Ca490A2F9eB5369A48593'],
  })

  useEffect(() => {
    refetch()
  }, [blockNumber])

  return <section>Token balance: {!!balance && formatEther(balance)}</section>
}
