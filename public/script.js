// script.js
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([20, 0], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Fetch token holders data
    fetch('http://localhost:3000/token-holders')
    .then(response => response.json())
    .then(data => {
       if(data && data?.length)
       {
        data.forEach(holder => {
            if (holder.location) {
                L.marker([holder.location.lat, holder.location.lon])
                    .addTo(map)
                    .bindTooltip(`Wallet Address: ${holder.address}<br>Balance: ${holder.balance}`)
                    .on('mouseover', function (e) {
                        this.openTooltip();
                    })
                    .on('mouseout', function (e) {
                        this.closeTooltip();
                    });
            }
        });        
       }
    })
    .catch(error => console.error('Error loading the token holders data:', error));
});