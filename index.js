const express = require("express");// chamar a biblioteca express
const path = require("path");// Define o caminho absoluto
require('dotenv/config'); // adicionar as variaveis de ambiente

const app = express();// colocar a biblioteca express no app

app.use(express.static(path.resolve() + "/www"))//Define a pasta estatica

app.get("/", function(req, res){ //Criar um retorno para servidor
  res.sendFile(path.resolve() + "/www/index.html")//Retorna o arquivo para o caminho "/"
})

app.listen(process.env.PORT, function(){
  console.log("Meu servidor está ligado! http://localhost:"+ process.env.PORT)
})