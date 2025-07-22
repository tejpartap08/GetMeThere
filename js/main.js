function planRoute() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const request = {
    origin: from,
    destination: to,
    travelMode: 'TRANSIT'
  };

  directionsService.route(request, (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
    } else {
      alert("Could not find route.");
    }
  });
}
