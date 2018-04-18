import "leaflet";
import "leaflet.gridlayer.googlemutant";


var GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.load(function (google) {
    var map = L.map('map').setView([51.505, -0.09], 13);

    var roadMutant = L.gridLayer.googleMutant({
        maxZoom: 18,
        type: 'roadmap'
    }).addTo(map);

    // var grid = L.gridLayer({
    //     attribution: 'Grid Layer',
    //     //      tileSize: L.point(150, 80),
    //     //      tileSize: tileSize
    // });

    // grid.createTile = function (coords) {
    //     var tile = L.DomUtil.create('div', 'tile-coords');
    //     tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');

    //     return tile;
    // };
    // map.addLayer(grid);
});
// GoogleMapsLoader.KEY = 'AIzaSyBLiywHBYg_waV3Hh6lH2EQKfTQJpSFYNw';