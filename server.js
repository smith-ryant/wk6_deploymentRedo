const express = require("express");
const app = express(); // create express app

app.use(express.static(`${__dirname}/public`)); // serve static files

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
}); // server listens on port 4000
