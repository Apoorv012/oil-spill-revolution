// Making a map and tiles
//   const map = L.map('myMap').setView([0, 0], 1);
const map = L.map("myMap", {
  center: [30, 10],
  zoom: 2.3,
});
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

map.on("click", function (e) {
  var popLocation = e.latlng;
  var popup = L.popup()
    .setLatLng(popLocation)
    .setContent(`<p>${popLocation}</p>`)
    .openOn(map);
});

// Making a marker with a custom icon
//   const issIcon = L.icon({
//     iconUrl: 'iss200.png',
//     iconSize: [50, 32],
//     iconAnchor: [25, 16]
//   });
//   const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

//   const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

//   let firstTime = true;

//   async function getISS() {
//     const response = await fetch(api_url);
//     const data = await response.json();
//     const { latitude, longitude } = data;

//     marker.setLatLng([latitude, longitude]);
//     if (firstTime) {
//       mymap.setView([latitude, longitude], 2);
//       firstTime = false;
//     }
//     document.getElementById('lat').textContent = latitude.toFixed(2);
//     document.getElementById('lon').textContent = longitude.toFixed(2);
//   }

//   getISS();

//   setInterval(getISS, 1000);
