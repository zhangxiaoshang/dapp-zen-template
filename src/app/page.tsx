'use client'
import { ReadTokenBalance } from '@/components/ReadTokenBalance'
import { WriteTransfer } from '@/components/WriteTransfer'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import Button from '@mui/material/Button'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import { enqueueSnackbar } from 'notistack'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Zen Dapp Template
        <SelfImprovementIcon
          sx={{ fontSize: 40, color: grey[300] }}
        ></SelfImprovementIcon>
      </h1>

      <section>
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
      </section>

      <section>
        <w3m-button />
      </section>

      <section>
        <h2>Mui</h2>
        <Button variant="contained">Hello world</Button>
      </section>

      <ReadTokenBalance></ReadTokenBalance>

      <WriteTransfer></WriteTransfer>

      <Button
        variant="contained"
        color="success"
        onClick={() =>
          enqueueSnackbar('ok', {
            variant: 'success',
          })
        }
      >
        Success Notify
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={() =>
          enqueueSnackbar('failed', {
            variant: 'error',
          })
        }
      >
        Error Notify
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() =>
          enqueueSnackbar('This is custom component', {
            variant: 'info',
          })
        }
      >
        Custom Notify
      </Button>
    </main>
  )
}
