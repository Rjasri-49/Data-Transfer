document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Redirect to showparams.html with query parameters
    window.location.href = `showparams.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
});