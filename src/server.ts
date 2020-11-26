import dotenv from 'dotenv-flow'
import app from './app'
import { connect } from './config/mongo'

dotenv.config()

connect()

const port = 3000
const host = '0.0.0.0'

app.listen(port, host)
