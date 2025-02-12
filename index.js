document.getElementById('fetchData').addEventListener('click', function() {
    fetch('/api/proxy/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: 'example' })
    })
    .then(response => response.json())
    .then(data => console.log('Datos:', data))
    .catch(error => console.error('Error:', error));
});
