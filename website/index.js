window.addEventListener('DOMContentLoaded', (event) => {
    window.alert('DOM fully loaded and parsed');
    var createSessionButton = document.getElementById("create-session-button");

    createSessionButton.addEventListener("click", (event) => {
        window.alert('Button pressed');
        fetch('http://localhost:8000/', {method: 'POST'})
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const sessionId = json.session_id;
            const sessionIdField = document.getElementById("session-id-field");
            sessionIdField.innerHTML = sessionId;
        })
    });
});