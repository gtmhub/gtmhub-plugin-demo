const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const https = require("https");
const mkcert = require("mkcert");

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

createHttpsServer();

async function createHttpsServer() {
  const ca = await mkcert.createCA({
    organization: 'Quantive Local Plugins CA',
    countryCode: 'US',
    state: 'Colorado',
    locality: 'Denver',
    validityDays: 365
  });
  
  const cert = await mkcert.createCert({
    domains: ['https://localplugins.com'],
    validityDays: 365,
    caKey: ca.key,
    caCert: ca.cert
  });

  const httpOptions = {
    key: cert.key,
    cert: cert.cert,
  }
  
  // Instantiate HTTPS server
  let server = https.createServer(httpOptions, app);
  
  server.listen(port, () => console.log(`Listening on https://localplugins.com:${port}`));
}

