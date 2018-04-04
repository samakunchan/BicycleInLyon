var mapCity = Object.create(MapObject);
if (sessionStorage.getItem("minute")){
    window.addEventListener("load", function () {
        document.getElementById('map').style.height = "0px";
        document.getElementById('nouvelleRes').style.display = "block";
        document.getElementById("nouvelleRes").addEventListener("click", mapCity.resize);
    });
    document.getElementById("nouvelleRes").addEventListener("click", mapCity.resize);
}
var credential = "https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0." +
    "0&outputformat=GEOJSON&maxfeatures=500&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn" +
    ":ogc:def:crs:EPSG::4171";
var mapCallback = function (response) {
    var useMap = JSON.parse(response);
    var inserMap = new google.maps.Map(document.getElementById("map"), mapCity.location);
    useMap.features.forEach(mapCity.infoStation);
    var mc = new MarkerClusterer(inserMap, mapCity.arrayMarker, mapCity.clusterOption);
    document.getElementById('resizeMap').addEventListener("click", mapCity.resize);

};
ajaxGet(credential, mapCallback);
