// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'map', {
  center: [10.0, 5.0],
  minZoom: 2,
  zoom: 2
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-base.js"]' ).attr( 'src' ).replace( 'leaf-base.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();
var ml = [];
for ( var i = 0; i < markers.length; ++i )
{
  var popup = markers[i].name +
              '<br/><b>url:</b> ' + '<a href="'+ markers[i].organizationUrl +'" target="_blank">'+ (markers[i].organizationUrl).split(/(\\|\/)/g).pop() +'</a>'  +
              '<br/><b>address:</b> ' + markers[i].address ;

  var m = L.marker( [markers[i].latitude, markers[i].longitude], {icon: myIcon} )
                  .bindPopup( popup );
  ml[markers[i].id] = m;
}
