require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notfound')
const errHandler = require('./middleware/error')
require('dotenv').config()
//Middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks' , tasks)
app.use(notFound)
app.use(errHandler)




const port = process.env.port || 3000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listening on port ${port}..`))
    } catch (error) {
        console.log(error);
        
    }
}
start()
    
