const app = require(".");
const connect = require("./configs/db");

app.listen(2345, async (req, res) => {
  await connect();
  console.log("Listening to the PORT 2345");
});
