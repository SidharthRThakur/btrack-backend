const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/authrouter");
const ProductRouter = require("./Routes/productrouter");
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080; // fectch data from port otherwise hardcoded 8080

app.get("/ping", (req, res) => {
  res.send("PONG");
});
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter); // this auth is used in the POSTMAN use fro grouping singup login
app.use("/products", ProductRouter); // this auth is used in the POSTMAN use fro grouping singup login
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
