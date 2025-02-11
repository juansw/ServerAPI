const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express en Vercel! 🚀" });
});

app.post('/data', (req, res) => {
  fetch("https://apim.workato.com/api_ferco/searchi-v1/search")
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data", details: error.message });
    });
});

module.exports = app;
