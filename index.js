const express=require("express")
const app=express()

const router2 = require("./storefile/addcompany")
const cors=require("cors")
const { Connection } = require("./dbconnection/coonection")
app.use(cors({
    origin:"*"
}))
const port=3420
app.get("/", (req,res)=>{
    return res.send("working...... nice")
})

app.use(router2)
app.listen(port,async()=>{
    try{
        await Connection();
        console.log("server is running with",port)
    }
    catch(error){
        console.log(error)
    }
})