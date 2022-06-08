import React from 'react'
import { Typography, Avatar } from '@mui/material'

export const TypographyComponent: React.FC = () => {
  return (
    <>
      <Typography variant='h6' noWrap component='div' >
        Controle de Carros
      </Typography>
      <Typography
        variant='h6'
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        noWrap
        component='div'
      >
        <Avatar alt='Carlos' sx={{ marginRight: '10px' }} src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/006fb02843be9538db487176df0d15382e347721.jpg' />
          Carlos
      </Typography>
    </>
  )
}
