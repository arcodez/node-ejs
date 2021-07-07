const express = require("express");
const app = express();

const port = 4000;

app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

//routes recomendado
//app.use(require("./routes/index"));

//Se configura la ruta de la carpeta Publica
app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log(`App on Port ${port}`);
