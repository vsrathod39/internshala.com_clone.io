const express = require('express');

const InternsController = require("./controllers/internship.controller");


const app = express();
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/interns", InternsController);

module.exports = app;