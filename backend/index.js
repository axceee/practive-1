import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import app from './app.js'

const port = process.env.PORT

connectDB()
.then(
    app.listen(port,()=>{
        console.log(`port is ${port}`)
    })
)
.catch((error)=>{
    console.error(error)
    process.exit(1);
})