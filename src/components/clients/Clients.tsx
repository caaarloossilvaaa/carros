import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Client } from '../../interfaces/Clients'

import { Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

interface Props {
  clients: Client[]
}

const ClientList = ({ clients = [] }: Props) => {
  const router = useRouter()
  const [openConfirm, setOpenConfirm] = useState(false)

  const handleDelete = async (id: string) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await fetch('http://localhost:3000/api/clients/' + id, {
        method: 'DELETE'
      })

      router.push('/clients')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box
      width='80vw'
      sx={{
        borderRadius: '10px',
        padding: '20px',
        boxShadow: 10,
        bgcolor: '#fff',
        color: 'black'
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align='right'>CPF</TableCell>
              <TableCell align='right'>CNPJ</TableCell>
              <TableCell align='right'>Telefone</TableCell>
              <TableCell align='right'>Celular</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {client.name}
                </TableCell>
                <TableCell align='right'>{client.cpf}</TableCell>
                <TableCell align='right'>{client.cnpj}</TableCell>
                <TableCell align='right'>{client.phone}</TableCell>
                <TableCell align='right'>{client.cell}</TableCell>
                <TableCell>
                  <Button onClick={() => router.push(`/clients/edit/${client.id}`)} key={client.id} >
                    <ModeEditIcon color='warning' />
                  </Button>
                  <Button onClick={() => setOpenConfirm(true)} >
                    <RemoveCircleIcon color='error' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {clients.map((client) => (
        <Dialog
          open={openConfirm}
          onClose={() => setOpenConfirm(false)}
          key={client.id}
        >
          <DialogTitle>
            {`Deletar o cliente ${client.name}?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deseja deletar o cliente ${client.name} ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleDelete(client.id)}>Deletar</Button>
            <Button onClick={() => setOpenConfirm(false)}>Cancelar</Button>
          </DialogActions>
        </Dialog>
      ))}
    </Box>
  )
}

export default ClientList
