'use client'
import { useWriteErc20Transfer } from '@/generated'
import Button from '@mui/material/Button'
import { useWaitForTransactionReceipt, type BaseError } from 'wagmi'
import { parseEther } from 'viem'

export function WriteTransfer() {
  const {
    data: hash,
    isPending,
    error,
    status,
    writeContract,
  } = useWriteErc20Transfer()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  const send = () => {
    writeContract({
      address: '0x36C97a9F9F0628BCc12cD3ebE7555bF9940Fc8c5',
      args: ['0x36C97a9F9F0628BCc12cD3ebE7555bF9940Fc8c5', parseEther('1')],
    })
  }

  return (
    <section>
      <Button variant="contained" disabled={isPending} onClick={send}>
        Transfer
      </Button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
      {status && <div>status: {status}</div>}
    </section>
  )
}
