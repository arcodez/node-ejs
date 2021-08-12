const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.set("view engine", "ejs");

//Routes 
//routes recomendado
app.use(require("./routes/index"));

//Se configura la ruta de la carpeta Publica
app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log(`App on Port ${port}`);
 