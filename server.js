const express = require("express");
const app = express();
const route = require("./router/index");
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1",route);


app.listen(5000,()=>{
    console.log("server is running on port 5000");
    
})