const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`)
});

app.get("/", (req, res) => {
  res.send(`Hello word on port ${PORT}`);
  
});


