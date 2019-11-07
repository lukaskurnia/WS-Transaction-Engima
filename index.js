/* eslint-disable no-undef*/
const express = require('express')
const app = express()

/*sementara pakai port 3000*/
app.listen(3000,function(){
    console.log("Server running on port 3000...")}
)

app.get("/",function(request,response){
    response.send("Hello World")
})
