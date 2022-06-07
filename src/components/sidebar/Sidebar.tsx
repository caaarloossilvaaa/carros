import { Box, Drawer, useTheme } from '@mui/material'
import React from 'react'

export const Sidebar: React.FC = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Drawer variant='permanent'>
        Teste
      </Drawer>
      <Box height='100vh' marginLeft={theme.spacing()} >
        {children}
      </Box>
    </>
  )
}
