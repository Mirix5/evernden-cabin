const path = require("path");
const express = require("express");
const app = express(); // create express app
const PORT = 3001

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// start express server on port 3001
app.listen(3001, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});