const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express en Vercel! 🚀" });
});

// Exporta la función para Vercel
module.exports = app;
