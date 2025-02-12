const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const apiResponse = await fetch('https://apim.workato.com/api_ferco/searchi-v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '94700300d77ce83c0806ec2e9cec6d16f24522b9a49bf4e9638d7efcc1e39710'
            },
            body: JSON.stringify(req.body),
        });

        const data = await apiResponse.text();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error en el proxy:', error);
        res.status(500).json({ error: 'Error al obtener la API' });
    }
};
