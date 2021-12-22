const User = require("../models/user.model");
var jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');

const express = require("express");

require("dotenv").config();
const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const Errors = errors.array().map((err) => {
            return (`${err.msg}`);
        })
        return res.render("pages/register_student", { error: JSON.stringify(Errors) });
    }
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (user) {
            return res.render("pages/register_student", { error: "User already exist" });
        }
        user = await User.create(req.body);
        const token = jwt.sign({ user: user }, process.env.TOKEN_KEY);
        res.render("pages/postLoginPage", { token: JSON.stringify(token), user: JSON.stringify(user) });
    } catch (e) {
        res.status(500).send({ status: "failed" });
    }
}

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.render("pages/homepage", { alert: "Please provide a correct email and password" });
        }
        const match = await user.checkPassword(req.body.password);
        if (!match) {
            return res.render("pages/homepage", { alert: "Please provide a correct email and password" });
        }
        const token = jwt.sign({ user: user }, process.env.TOKEN_KEY);
        res.render("pages/postLoginPage", { token: JSON.stringify(token), user: JSON.stringify(user) });
    } catch (e) {
        res.status(500).send({ status: "failed", message: e.message });
    }
}

module.exports = { register, login };