let map, directionsService, directionsRenderer;

function initMap() {
  const school = { lat: -33.7358, lng: 150.8803 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: school,
    zoom: 14,
  });
  new google.maps.Marker({ position: school, map: map, title: "Quakers Hill" });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
  directionsRenderer.setPanel(document.getElementById("directionsPanel"));
}
