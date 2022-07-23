// Making a map and tiles
const map = L.map("myMap", {
  center: [30, 10],
  zoom: 2.3,
});
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

// map.on("click", function (e) {
//   var popLocation = e.latlng;
//   var popup = L.popup()
//     .setLatLng(popLocation)
//     .setContent(`<p>${popLocation}</p>`)
//     .openOn(map);
// });

// Making a marker with a custom icon
fetch("incidents.json")
  .then(res => res.json())
  .then(incidents => {
    for (const incident of incidents) {
      L.circle([incident.lat, incident.lon], { radius: 50000 })
        .addTo(map)
        .bindPopup(incident.name)
    }
  })