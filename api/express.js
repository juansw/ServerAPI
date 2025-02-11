const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola desde Express en Vercel! 🚀");
});

module.exports = app;
