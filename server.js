const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, `src/index.html`));
});

app.get("/hello-world", (req, res) => {
  res.send("<h3>Hello world plugin is working!</h3>");
});

app.use(express.static("dist"));
app.use(express.static("public"));

const port = 5000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}/hello-world`));
