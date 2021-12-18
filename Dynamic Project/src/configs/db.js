const mongoose = require('mongoose');
require('dotenv').config();

// console.log(process.env.ATLASPASS);

module.exports = () => {

    return mongoose.connect(`mongodb+srv://bourbon:${process.env.ATLASPASS}@internshala.ald5y.mongodb.net/Internshala`);
}