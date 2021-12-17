const express = require("express");

const Interns = require("../models/internship.model");

const router = express.Router();


router.get('/internships', async function (req, res) {
    const products = await Interns.find().lean().exec();  
    return res.render('pages/filter' , {
        products,
    });
});


router.get('/internships/:id',  async function (req, res) {
    const product = await Interns.findById(req.params.id).lean().exec();
    return res.render('pages/internshipsDetails' , {
        product,
    });
});


module.exports = router;
