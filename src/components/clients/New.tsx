import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Client } from '../../interfaces/Clients'
import { Box, Button, FormControl, FormGroup, FormLabel, Input, InputLabel, MenuItem, Select } from '@mui/material'

type ChangeInputHandler = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const baseUrl = process.env.API_URL

const initialState = {
  name: '',
  cpf: '',
  cnpj: '',
  adress: '',
  number: 0,
  complement: '',
  district: '',
  city: '',
  state: '',
  phone: '',
  cell: ''
}

const New: React.FC = () => {
  const [client, setClient] = useState<Client>(initialState)
  const [loading, setLoading] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const router = useRouter()

  const createClient = async (client: Client) =>
    await fetch(baseUrl + '/clients', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const updateClient = async (id:string, client: Client) =>
    await fetch(baseUrl + '/clients/' + id, {
      method: 'PUT',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    try {
      if (typeof router.query.id === 'string') {
        updateClient(router.query.id, client)
      } else {
        createClient(client)
      }
      setClient(initialState)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleChange = ({ target: { name, value } }: ChangeInputHandler) =>
    setClient({ ...client, [name]: value })

  // const loadClient = async (id: string) => {
  //   const res = await fetch(baseUrl + '/clients/' + id)
  //   const client = await res.json()
  //   setClient({ })
  // }

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(baseUrl + '/clients/' + id, {
        method: 'DELETE'
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   if (typeof router.query.id === 'string') load
  // })

  return (
    <Box
      width='50vw'
      sx={{
        border: 1,
        borderColor: 'grey.500',
        borderRadius: 5,
        padding: '20px',
        boxShadow: 10,
        bgcolor: '#fff',
        color: 'black'
      }}
    >
      <FormLabel sx={{ textAlign: 'center', color: 'black' }} ><h1>Novo Cliente</h1></FormLabel>
      <FormGroup sx={{ marginTop: '25px' }}>
        <FormControl size='medium'>
          <InputLabel>Nome do Cliente</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} fullWidth id='name' aria-describedby='Nome do Cliente' />
        </FormControl>
      </FormGroup>
      <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }} >
        <FormControl>
          <InputLabel>CPF</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='cpf' aria-describedby='CPF do Cliente' />
        </FormControl>
        <FormControl>
          <InputLabel>CNPJ</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='cnpj' aria-describedby='CNPJ do Cliente' />
        </FormControl>
        <FormControl>
          <InputLabel>Telefone</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='phone' aria-describedby='Telefone do Cliente' />
        </FormControl>
        <FormControl>
          <InputLabel>Celular</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='cell' aria-describedby='Celular do Cliente' />
        </FormControl>
      </FormGroup>
      <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '10px' }} >
        <FormControl>
          <InputLabel>Endereço</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='adress' aria-describedby='Endereço' />
        </FormControl>
        <FormControl>
          <InputLabel>Número</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='number' aria-describedby='Número' />
        </FormControl>
      </FormGroup>
      <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 0.5fr', gap: '10px' }} >
        <FormControl>
          <InputLabel>Complemento</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='complement' aria-describedby='Complemento' />
        </FormControl>
        <FormControl>
          <InputLabel>Bairro</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='district' aria-describedby='Bairro' />
        </FormControl>
        <FormControl>
          <InputLabel>Cidade</InputLabel>
          <Input autoComplete='off' sx={{ padding: '5px' }} id='city' aria-describedby='Cidade' />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>UF</InputLabel>
          <Select
            labelId='state'
            id='state'
            label='UF'
            sx={{ padding: '5px' }}
          >
            <MenuItem value='AC'>AC</MenuItem>
            <MenuItem value='AL'>AL</MenuItem>
            <MenuItem value='AM'>AM</MenuItem>
            <MenuItem value='AP'>AP</MenuItem>
            <MenuItem value='BA'>BA</MenuItem>
            <MenuItem value='CE'>CE</MenuItem>
            <MenuItem value='DF'>DF</MenuItem>
            <MenuItem value='ES'>ES</MenuItem>
            <MenuItem value='GO'>GO</MenuItem>
            <MenuItem value='MA'>MA</MenuItem>
            <MenuItem value='MG'>MG</MenuItem>
            <MenuItem value='MS'>MS</MenuItem>
            <MenuItem value='MT'>MT</MenuItem>
            <MenuItem value='PA'>PA</MenuItem>
            <MenuItem value='PB'>PB</MenuItem>
            <MenuItem value='PE'>PE</MenuItem>
            <MenuItem value='PI'>PI</MenuItem>
            <MenuItem value='PR'>PR</MenuItem>
            <MenuItem value='RJ'>RJ</MenuItem>
            <MenuItem value='RN'>RN</MenuItem>
            <MenuItem value='RO'>RO</MenuItem>
            <MenuItem value='RR'>RR</MenuItem>
            <MenuItem value='RS'>RS</MenuItem>
            <MenuItem value='SC'>SC</MenuItem>
            <MenuItem value='SE'>SE</MenuItem>
            <MenuItem value='SP'>SP</MenuItem>
            <MenuItem value='TO'>TO</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup row sx={{ display: 'flex', justifyContent: 'flex-end' }} >
        <Button sx={{ marginTop: '20px' }} variant='contained' color='success'>Salvar</Button>
        <Button sx={{ marginTop: '20px', marginLeft: '10px' }} variant='contained' color='error'>Cancelar</Button>
      </FormGroup>
    </Box>
  )
}

export default New
