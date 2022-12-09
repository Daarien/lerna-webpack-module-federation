const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const port = 3003;

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Static server listening on port ${port}`);
});
