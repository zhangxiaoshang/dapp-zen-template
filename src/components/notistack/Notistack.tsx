import { styled } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const Success = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#6201EB',
  },
}))

export const Error = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-error': {
    backgroundColor: '#ff9800',
  },
}))
