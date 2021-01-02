var markerClusters = L.markerClusterGroup();
leaflet_layer('3TR');

function leaflet_layer(root){

map.invalidateSize();

markerClusters.clearLayers();
this.participants.forEach((link , index)  => {
        if(link.name == root){
        for ( var i = 0; i < link.ids.length; ++i )
{
  try {
  markerClusters.addLayer( ml[link.ids[i]] );
  }
  catch (error) {
  console.error(error);
  }
}
}
});

map.addLayer( markerClusters );
map.fitBounds(markerClusters.getBounds());


return;
};

