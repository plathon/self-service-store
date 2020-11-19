import express, { Request, Response } from 'express'

import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './api-schema.json'

const server = express()

server.use(express.json())

server.get('/', (request: Request, response: Response) => {
  response.status(200).json({ response: 'ok!!' })
})

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const port = 3000
const host = '0.0.0.0'

server.listen(port, host)
