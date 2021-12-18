const express = require("express");
const Interns = require("../models/internship.model");
const User = require("../models/user.model");
const router = express();
router.use(express.json());

router.get('/', async function (req, res) {
    return res.render('pages/homepage');
});

router.get('/internships', async function (req, res) {

    const products = await Interns.find().lean().exec();
    
    return res.render('pages/filter' , {
        products,
    });
});

// router.get('/internships/:id',  async function (req, res) {
//     const product = await Interns.findById(req.params.id).lean().exec();
//     return res.render('pages/internshipsDetails' , {
//         product,
//     });
// });

router.get('/internships/:id',  async function (req, res) {
    const product = await Interns.findById(req.params.id).lean().exec();
    return res.render('pages/internshipsDetails' , { product: JSON.stringify(product) });
});

router.post("/dashboard", async function (req,res) {
    try{
        console.log(req.body);
        const user = await User.create(req.body);
        return res.render('pages/postLoginPage');
    }
    catch(e) {
        return res.send('SAD');
    }
})

router.get('/reg', async function (req, res) {
    return res.render('pages/all');
});


module.exports = router;
