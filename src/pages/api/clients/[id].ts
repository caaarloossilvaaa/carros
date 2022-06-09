import { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../../utils/database'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, query: { id } } = req

  switch (method) {
    case 'GET':
      try {
        const query = 'SELECT * FROM clients WHERE id = $1'
        const values = [id]
        const result = await conn.query(query, values)

        if (result.rowCount === 0) { return res.status(404).json({ message: 'Client Not Found' }) }

        return res.json(result.rows[0])
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    case 'PUT':
      try {
        const { name, cpf, cnpj, adress, number, complement, district, city, state, phone, cell } = body
        const query = 'UPDATE clients SET name = $1, cpf = $2, cnpj = $3, adress = $4, number = $5, complement = $6, district = $7, city = $8, state = $9, phone = $10, cell = $11 WHERE id = $12 RETURNING *'
        const values = [name, cpf, cnpj, adress, number, complement, district, city, state, phone, cell]
        const result = await conn.query(query, values)
        return res.json(result.rows[0])
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    case 'DELETE':
      try {
        const query = ''
        const values = [id]
        const result = await conn.query(query, values)

        if (result.rowCount === 0) { return res.status(404).json({ message: 'Task Not Found' }) }

        return res.json(result.rows[0])
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Method are not supported' })
  }
}
