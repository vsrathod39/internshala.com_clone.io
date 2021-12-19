const express = require("express");

const Interns = require("../models/internship.model");

const router = express.Router();
const authenticate = require("../middlewares/authenticate");

router.get("/register", authenticate, async function (req, res) {
  return res.render("pages/postLoginPage");
});

router.get("/", async function (req, res) {
  return res.render("pages/homepage");
});

router.get("/pages/resume", authenticate, async function (req, res) {
  return res.render("pages/resume");
});

router.get("/register_employer", async function (req, res) {
  return res.render("pages/register_employer");
});

router.get("/searchSec", async function (req, res) {
  return res.render("pages/searchSec");
});

router.get("/register_student", async function (req, res) {
  return res.render("pages/register_student");
});

router.get("/login", authenticate, async function (req, res) {
  return res.render("pages/postLoginPage");
});

router.get("/internship_details", async function (req, res) {
  return res.render("pages/internshipsDetails");
});

router.get("/internships", async function (req, res) {
  const location = req?.query?.location || true;
  const wfh = req?.query?.work_form_home || true;
  let products;
  if (location && wfh) {
    products = await Interns.find({
      $and: [
        { location: { $in: [location] } },
        { work_form_home: { $eq: wfh } },
      ],
    });
  }
  if (location || wfh) {
    products = await Interns.find({
      $or: [
        { location: { $in: [location] } },
        { work_form_home: { $eq: wfh } },
      ],
    });
  }
  if (!location || wfh) {
    products = await Interns.find().lean().exec();
  }
  return res.render("pages/filter", {
    products,
  });
});

router.get("/internships/:id", async function (req, res) {
  const product = await Interns.findById(req.params.id).lean().exec();
  return res.render("pages/internshipsDetails", {
    product: JSON.stringify(product),
  });
});

// router.get('/internships/:wfh', async function(req, res) {
//     const  products = await Interns.find(  {work_form_home  : req.params.wfh  } )
//     return res.render('pages/filter' , {
//          products,
//     });

// });

module.exports = router;
