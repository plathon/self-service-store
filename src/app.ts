import express, { Request, Response } from 'express'

const server = express()

server.use(express.json())

server.get('/', (request: Request, response: Response) => {
  response.status(200).json({ response: 'ok!!' })
})

const port = 3000
const host = '0.0.0.0'

server.listen(port, host)
