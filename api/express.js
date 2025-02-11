/*const express = require("express");
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

module.exports = app;*/


const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Endpoint proxy
app.post('/data', async (req, res) => {
    try {
        const apiResponse = await fetch('https://apim.workato.com/api_ferco/searchi-v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '94700300d77ce83c0806ec2e9cec6d16f24522b9a49bf4e9638d7efcc1e39710'
            },
            body: JSON.stringify(req.body),
        });

        const data = await apiResponse.text(); // o .json() si la respuesta es JSON
        res.send(data);
    } catch (error) {
        console.error('Error en el proxy:', error);
        res.status(500).send('Error al obtener la API');
    }
});

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express en Vercel! 🚀" });
});

// Exportar el handler para Vercel
module.exports = app;
