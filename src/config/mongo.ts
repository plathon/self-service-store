import mongoose, { Connection } from 'mongoose'

let database: Connection

export const connect = async () => {
  const uri = 'mongodb://localhost:27017/test'

  if (database) return

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  database = mongoose.connection

  database.on('error', () => {
    console.log('error connecting to database')
  })

  return database
}

export const disconnect = async () => {
  if (!database) return

  return await mongoose.disconnect()
}
