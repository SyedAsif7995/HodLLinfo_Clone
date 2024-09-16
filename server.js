
const express = require('express');
const path = require('path');
const db = require('./db'); 
const fetchCryptoData = require('./fetchData'); 

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/api/getTop10', (req, res) => {
    db.all('SELECT * FROM cryptos LIMIT 10', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    fetchCryptoData(); 
});

setInterval(fetchCryptoData, 60000);
