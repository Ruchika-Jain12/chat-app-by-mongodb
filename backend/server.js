import dotenv from 'dotenv'
import express from 'express'
import connectToMongoDB from './db/connectToMongoDb.js'
import authRoutes from './routes/auth.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello Ruchi !')
// })

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server running at port ${PORT}`)
})
