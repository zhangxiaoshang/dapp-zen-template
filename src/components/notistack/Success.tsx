import { styled } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

export const Success = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#6201EB',
  },
}))
