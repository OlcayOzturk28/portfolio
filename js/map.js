let map = L.map('thuisMap').setView([51.225520, 4.417759], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let Marker = L.marker([51.225520, 4.417759]).addTo(map);
Marker.bindPopup("<b>Sint-Jansplein</b><br>Sint-Jansplein 1").openPopup();

L.circle([51.225520, 4.417759], {color: "#FF0000",radius: 700}).addTo(map);