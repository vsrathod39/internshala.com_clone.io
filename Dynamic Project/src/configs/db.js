const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return mongoose.connect(`mongodb+srv://bourbon:${process.env.ATLASPASS}@internshala.ald5y.mongodb.net/test`);
}