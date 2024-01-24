import { styled } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const Error = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-error': {
    backgroundColor: '#ff9800',
  },
}))
