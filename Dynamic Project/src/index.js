const express = require('express');
const path = require('path');
const InternsController = require("./controllers/internship.controller");


const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


app.use("/", InternsController);

module.exports = app;