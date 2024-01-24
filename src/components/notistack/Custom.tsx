import { CustomContentProps, SnackbarContent } from 'notistack'
import React from 'react'

const Custom = React.forwardRef<HTMLDivElement, CustomContentProps>(
  (props, ref) => {
    const {
      // You have access to notistack props and options 👇🏼
      id,
      message,
      ...other
    } = props

    console.log('oth', other)

    return (
      <SnackbarContent ref={ref} role="alert">
        {message}
      </SnackbarContent>
    )
  },
)

Custom.displayName = 'Info'

export { Custom }
