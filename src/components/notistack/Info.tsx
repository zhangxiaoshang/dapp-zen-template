import React from 'react'
import { SnackbarContent, CustomContentProps } from 'notistack'

const Info = React.forwardRef<HTMLDivElement, CustomContentProps>(
  (props, ref) => {
    const {
      // You have access to notistack props and options 👇🏼
      id,
      message,
      ...other
    } = props

    return (
      <SnackbarContent ref={ref} role="alert" {...other}>
        {message}
      </SnackbarContent>
    )
  },
)

Info.displayName = 'Info'

export default Info
