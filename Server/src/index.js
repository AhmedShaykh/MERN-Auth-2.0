const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

require("dotenv").config();

connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});