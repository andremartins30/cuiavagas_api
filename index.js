const express = require("express")
const app = express()
const routes = require("./routes/routes")
const port = process.env.PORT || 3000;

app.use("/", routes)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>{
   console.log(`API rodando na porta http://localhost:${port}`) 
})