// JavaScript to retrieve and display URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const password = urlParams.get('password');

// Display the accepted data
document.getElementById('displayUsername').textContent = username || "N/A";
document.getElementById('displayPassword').textContent = password || "N/A";