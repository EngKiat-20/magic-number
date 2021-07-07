window.addEventListener('DOMContentLoaded', (event) => {
    window.alert('DOM fully loaded and parsed');
});

var createSessionButton = document.getElementById('create-session-button')

createSessionButton.addEventListener("click", function(){
    window.alert('Button Pressed');
});