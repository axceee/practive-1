import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

import router from './routes/user.routes.js'

app.use('/api',router)



export default app