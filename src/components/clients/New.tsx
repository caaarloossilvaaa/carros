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

const New = (): JSX.Element => {
  const [client, setClient] = useState<Client>(initialState)
  const [loading, setLoading] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const router = useRouter()

  const createClient = async (client: Client) =>
    await fetch('http://localhost:3000/api/clients', {
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
      // router.push('/')
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
  //   setClient({  })
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
      <form onSubmit={handleSubmit}>
        <FormLabel sx={{ textAlign: 'center', color: 'black' }} ><h1>Novo Cliente</h1></FormLabel>
        <FormGroup sx={{ marginTop: '25px' }}>
          <FormControl size='medium'>
            <InputLabel>Nome do Cliente</InputLabel>
            <Input name='name' value={client.name} onChange={handleChange} required autoComplete='off' sx={{ padding: '5px' }} fullWidth />
          </FormControl>
        </FormGroup>
        <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }} >
          <FormControl>
            <InputLabel>CPF</InputLabel>
            <Input name='cpf' value={client.cpf} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl>
            <InputLabel>CNPJ</InputLabel>
            <Input name='cnpj' value={client.cnpj} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} id='cnpj' />
          </FormControl>
          <FormControl>
            <InputLabel>Telefone</InputLabel>
            <Input name='phone' value={client.phone} onChange={handleChange} required autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl>
            <InputLabel>Celular</InputLabel>
            <Input name='cell' value={client.cell} onChange={handleChange} required autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
        </FormGroup>
        <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '10px' }} >
          <FormControl>
            <InputLabel>Endereço</InputLabel>
            <Input name='adress' value={client.adress} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl>
            <InputLabel>Número</InputLabel>
            <Input name='number' value={client.number} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
        </FormGroup>
        <FormGroup row sx={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 0.5fr', gap: '10px' }} >
          <FormControl>
            <InputLabel>Complemento</InputLabel>
            <Input name='complement' value={client.complement} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl>
            <InputLabel>Bairro</InputLabel>
            <Input name='district' value={client.district} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl>
            <InputLabel>Cidade</InputLabel>
            <Input name='city' value={client.city} onChange={handleChange} autoComplete='off' sx={{ padding: '5px' }} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>UF</InputLabel>
            <Select
              value={client.state}
              name='state'
              label='UF'
              sx={{ padding: '5px' }}
              onChange={handleChange}
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
          <Button type='submit' sx={{ marginTop: '20px' }} variant='contained' color='success'>Salvar</Button>
          <Button sx={{ marginTop: '20px', marginLeft: '10px' }} variant='contained' color='error'>Cancelar</Button>
        </FormGroup>
      </form>
    </Box>
  )
}

export default New
