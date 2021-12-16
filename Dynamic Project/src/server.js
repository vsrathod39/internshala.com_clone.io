const  app = require('.');
const connect = require('./configs/db');

app.listen(1234, async(req, res) => {
    await connect();
    console.log("Listening to the PORT 1234");
});