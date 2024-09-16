const axios = require('axios');
const db = require('./db');

const fetchCryptoData = async () => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = response.data;

        
        db.run('DELETE FROM cryptos');

        
        const top10 = Object.keys(data).slice(0, 10).map(key => data[key]);

        
        top10.forEach(crypto => {
            const { name, last, buy, sell, volume, base_unit } = crypto;
            db.run('INSERT INTO cryptos (name, last, buy, sell, volume, base_unit) VALUES (?, ?, ?, ?, ?, ?)', 
                [name, last, buy, sell, volume, base_unit]);
        });

        console.log('Crypto data updated successfully.');
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

module.exports = fetchCryptoData;
