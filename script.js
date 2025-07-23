// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Live Map Tracking (Leaflet) ===
const map = L.map('map').setView([-33.8688, 151.2093], 13); // Sydney coords

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

const marker = L.marker([-33.8688, 151.2093]).addTo(map)
  .bindPopup('Bus 302 - Current Location')
  .openPopup();

// Simulate transport moving every 5 seconds
let lat = -33.8688;
let lng = 151.2093;
setInterval(() => {
  lat += (Math.random() - 0.5) * 0.001;
  lng += (Math.random() - 0.5) * 0.001;
  marker.setLatLng([lat, lng]);
  map.setView([lat, lng]);
}, 5000);

// === Arrival Time Updates ===
const arrivalList = document.getElementById('arrival-list');

function updateArrivals() {
  const routes = ['Bus 302', 'Train T1', 'Metro M1'];
  const newHTML = routes.map(route => {
    const minutes = Math.floor(Math.random() * 10 + 1);
    return `<li>${route} - Arriving in ${minutes} min</li>`;
  }).join('');
  arrivalList.innerHTML = newHTML;
}

setInterval(updateArrivals, 10000);
updateArrivals(); // Initial load

// === Notifications Toggle ===
document.getElementById('toggle-notifications').addEventListener('click', () => {
  const button = document.getElementById('toggle-notifications');
  const enabled = button.classList.toggle('enabled');
  button.textContent = enabled ? 'Notifications: ON' : 'Notifications: OFF';
  alert(enabled ? 'Notifications enabled!' : 'Notifications disabled.');
});

// === Route Planner ===
document.getElementById('route-form').addEventListener('submit', e => {
  e.preventDefault();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const routeResult = document.getElementById('route-result');
  if (from && to && from !== to) {
    routeResult.textContent = `Showing best route from ${from} to ${to}... (via Bus 302 + Train T1)`;
  } else {
    routeResult.textContent = 'Please select two different locations.';
  }
});

// === Traffic Alerts (Mock) ===
const alerts = [
  '⚠️ Major delays on Train T1 due to signal failure.',
  '⚠️ Road closure on Main St due to flooding.',
  '✅ All services currently running smoothly.'
];

function rotateAlerts() {
  const alertBox = document.getElementById('alert-box');
  const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
  alertBox.textContent = randomAlert;
}
setInterval(rotateAlerts, 15000);
rotateAlerts(); // Initial load

// === Student Discounts (Static Display) ===
document.getElementById('discounts').innerHTML = `
  <ul>
    <li>🚍 50% off all buses with Opal Card (Student)</li>
    <li>🚆 30% off train tickets during off-peak</li>
    <li>🚋 Metro free on weekends with school ID</li>
  </ul>
`;
