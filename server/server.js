const express = require("express");
const ClientUrl = require("./test");
const connectDb = require("./Controller/connectDb");
require("dotenv").config();


const app = express();
connectDb(process.env.DB_URL);
app.get("/", (req, res) => {
  res.redirect(ClientUrl);
});

app.get("/api", (req, res) => {
  res.json(["req a query"]);
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
