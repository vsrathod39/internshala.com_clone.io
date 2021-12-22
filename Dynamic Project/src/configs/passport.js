require("dotenv").config();
const sendMail = require("../utils/send-mail");
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const jwt = require('jsonwebtoken');

const passport = require("passport");

const { uuid } = require("uuidv4");

const User = require("../models/user.model");

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:2345/auth/google/callback",
  passReqToCallback: true
},
  async function (request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({ email: profile?._json?.email }).lean().exec();
    if (!user) {
      user = await User.create({
        first_name: profile?._json?.given_name,
        last_name: profile?._json?.family_name,
        email: profile?._json?.email,
        password: uuid(),
      });
    }
    const token = jwt.sign({ user: user }, process.env.TOKEN_KEY);
    // console.log(adminsEmail);
    sendMail("master@clone.project", user.email, `Internshala Clone Welcome Mail : ${user.first_name} ${user.last_name}`, `<p>Hi, you have sucessfully logedin. Your user name or user email is "<b>${user.email}</b>" and password is "<b>${user.password}</b>". Please save it securely. <p>Thank you<br>Team Internshala</p>`);
    return done(null, { user, token });
  }
));

module.exports = passport;