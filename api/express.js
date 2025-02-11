const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express en Vercel! 🚀" });
});

app.post('/data', async (req, res) => {  // Agregar "async" aquí
    try {
        const apiResponse = await fetch("https://apim.workato.com/api_ferco/searchi-v1/search");
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data", details: error.message });  // Mejorando el mensaje de error
    }
});

// Exporta la función para Vercel
module.exports = app;
