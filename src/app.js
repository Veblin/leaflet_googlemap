import "leaflet";
import "leaflet.gridlayer.googlemutant";
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBLiywHBYg_waV3Hh6lH2EQKfTQJpSFYNw',
});


// googleMapsClient.geocode({
//         address: '1600 Amphitheatre Parkway, Mountain View, CA'
//     })
//     .asPromise()
//     .then((response) => {
//         console.log(response.json.results);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
var map = L.map('map').setView([0,0],0);

var roadMutant = L.gridLayer.googleMutant({
    maxZoom: 24,
    type:'roadmap'
}).addTo(map);

var grid = L.gridLayer({
    attribution: 'Grid Layer',
//      tileSize: L.point(150, 80),
//      tileSize: tileSize
});

grid.createTile = function (coords) {
    var tile = L.DomUtil.create('div', 'tile-coords');
    tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');

    return tile;
};

map.addLayer(grid);