const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express en Vercel! 🚀" });
});

app.post('/data', (req, res) => {
    try {
        const apiResponse = await fetch("https://apim.workato.com/api_ferco/searchi-v1/search");
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
  }
    /*try {
        const apiResponse = await fetch('https://apim.workato.com/api_ferco/searchi-v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '94700300d77ce83c0806ec2e9cec6d16f24522b9a49bf4e9638d7efcc1e39710'
            },
            body: JSON.stringify(req.body),
        });

        const data = await apiResponse.text(); // or .json() if the response is JSON
        res.send(data); // Forward the API response to the client
    } catch (error) {
        console.error('Error in proxy:', error);
        res.status(500).send('Error fetching the API');
    }*/
});

// Exporta la función para Vercel
module.exports = app;
