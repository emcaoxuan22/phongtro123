import express from "express"
require('dotenv').config()
import cors from "cors"
import router from "./src/routers/auth"
import initRouter from "./src/routers"


const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

initRouter(app)



const port = process.env.PORT || 8888

const listener = app.listen(port, () => {
    console.log(`server is running on the port ${listener.address().port}`)
})