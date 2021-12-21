var jwt = require('jsonwebtoken');

require("dotenv").config();

const authenticate = (req, res, next) => {
    const bearerToken = JSON.parse(localStorage.getItem("bearerToken"));
    if(!bearerToken)
    {
        return res.status(400).send("Please provide a valid token");
    }
    if(bearerToken.split(" ")[0] !== "Bearer")
    {
        return res.status(400).send("Please provide a valid token");   
    }
    const token = bearerToken.split(" ")[1];

    try {
        var user = jwt.verify(token, process.env.TOKEN_KEY);
    } catch(err) {
        return res.status(400).send("Please provide a valid token");
    }

    req.user = user;

    next();
    

}

module.exports = authenticate;