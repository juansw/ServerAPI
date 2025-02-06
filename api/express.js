import express from 'express';
import fetch from 'node-fetch';
import path from 'path';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Vercel!');
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

// Export the app as a handler for Vercel
//export default app;
export default function handler(req, res) {
  res.json({ message: "Hello from Vercel!" });
}
