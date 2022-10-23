const path = require("path");
const express = require("express");
const app = express(); // create express app
const PORT = 3001

app.use(express.static("build"));

// start express server on port 3001
app.listen(3001, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});