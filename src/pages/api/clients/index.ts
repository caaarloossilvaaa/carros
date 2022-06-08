import { NextApiRequest, NextApiResponse } from 'next'
import { conn } from '../../../utils/database'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const query = 'SELECT * FROM clients'
        const response = await conn.query(query)
        return res.json(response.rows)
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }

    case 'POST':
      try {
        const { name, cpf, cnpj, adress, number, complement, district, city, state, phone, cell } = body
        const query =
          'INSERT INTO clients(name, cpf, cnpj, adress, number, complement, district, city, state, phone, cell) VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11) RETURNING *'
        const values = [name, cpf, cnpj, adress, number, complement, district, city, state, phone, cell]
        const response = await conn.query(query, values)

        return res.json(response.rows[0])
      } catch (error: any) {
        return res.status(400).json({ message: error.message })
      }
    default:
      return res.status(400).json({ message: 'Method are not supported' })
  }
}
