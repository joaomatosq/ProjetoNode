const express = require("express")

const app = express();

app.get();

app.get("/login", (req, res)=>{
    res.send("Bemvindo ao login")
})



app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})