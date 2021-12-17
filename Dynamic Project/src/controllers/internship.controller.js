const express = require("express");

const Interns = require("../models/internship.model");

const router = express.Router();


router.get('/', async function (req, res) {

    const products = await Interns.find().lean().exec();
    
    return res.render('pages/filter' , {
        products,
    });

});


module.exports = router;
