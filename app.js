import express from "express"
import mongoose  from "mongoose"
import morgan from "morgan"
import cors from "cors"

const app =express();
const hostname="127.0.0.1"
const port = process.env.port || 8080



const dabasename = "galaxyStore"
mongoose.connect(`mongodb://127.0.0.1:27017/${dabasename}`)
.then(()=>{
    console.log(`connected to ${dabasename}`);
})
.catch(err =>{
    console.log(err)
})

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.listen(port, hostname,()=>{
    console.log(`server running  ${hostname}:${port}`);
})

