window.addEventListener('DOMContentLoaded', (event) => {
    window.alert('DOM fully loaded and parsed');
});

var createSessionButton = document.getElementById('create-session-button')

window.addEventListener(createSessionButton, (event) => {
    window.alert('Button Pressed')
});