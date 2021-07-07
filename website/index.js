window.addEventListener('DOMContentLoaded', (event) => {
    window.alert('DOM fully loaded and parsed');
});

var createSessionButton = document.getElementById('create-session-button');

document.getElementById('create-session-button').addEventListener("click", (event) => {
    window.alert('Button pressed');
});