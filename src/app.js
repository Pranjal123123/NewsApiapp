const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();


const port = process.env.PORT || 7000;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
require("dotenv").config();
app.set("view engine", "ejs");
const { Console } = require("console");

//body parser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes===========================================
var newsRoutes = require("../routes/news");
app.use("/news", newsRoutes);

app.get("/", (req, res) => {
res.redirect("/news/");
});
  
app.listen(port, () => {
console.log(`server is running at port ${port}`);
});
  