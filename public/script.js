const fetchCryptoData = async () => {
    try {
        const response = await fetch('/api/getTop10');
        const data = await response.json();

        const tableBody = document.getElementById('crypto-table');
        tableBody.innerHTML = '';

        data.forEach(crypto => {
            const row = `<tr>
                <td>${crypto.name}</td>
                <td>${crypto.last}</td>
                <td>${crypto.buy}</td>
                <td>${crypto.sell}</td>
                <td>${crypto.volume}</td>
            </tr>`;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

setInterval(fetchCryptoData, 10000); 
fetchCryptoData(); 
