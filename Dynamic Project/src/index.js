const express = require('express');
const path = require('path');
const InternsController = require("./controllers/internship.controller");
const passport = require("./configs/passport");
const bodyParser=require("body-parser");
const app = express();
app.use(passport.initialize());

app.use(bodyParser.urlencoded({extended:true}));


const {register, login} = require("./controllers/auth.controller");

const {body} = require('express-validator');

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser(function({user, token}, done) {
    done(null, {user, token});
  });
  
  passport.deserializeUser(function(user, done) {
    done(err, user);
  }); 
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  
  app.get( '/auth/google/callback',
      passport.authenticate( 'google', {
          failureRedirect: '/auth/google/failure'
  }),
  function (req, res) {
    return res.render("pages/postLoginPage", {token: JSON.stringify(req.user.token), user: JSON.stringify(req.user)});
  }
  );
  
  app.get("/auth/google/failure", (req, res) => {
    res.send({error: "something went wrong"});
  })
  
  app.post("/register", body("first_name").notEmpty().withMessage("Name field can't be empty"), body("email").notEmpty().withMessage("Email field can't be empty").bail().isEmail().withMessage("Invalid email"), body("password").notEmpty().withMessage("Password field can't be empty").bail().custom((value) => {
    const isPassword = /^\w{3,}[@$*]+[0-9]+$/.test(value);
    if(!isPassword)
    {
        throw new Error("Password should be of format alphanumeric + special character + numeric");
    }
    if(value.length < 6)
    {
        throw new Error("Password should be of atleast 6 characters");
    }
    return true;
  }), register);
  
  app.post("/login", login);


  app.use("/", InternsController);

module.exports = app;