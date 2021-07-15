window.addEventListener('DOMContentLoaded', (event) => {
    var createSessionButton = document.getElementById("create-session-button");
    var submitGuessButton = document.getElementById("submit-guess-button")

    createSessionButton.addEventListener("click", (event) => {
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

    submitGuessButton.addEventListener("click", (event) => {
        window.alert("Submit button clicked")

        const sessionIdInput = document.getElementById('session-id-input');
        const attemptInput = document.getElementById('attempt-input');

        const sessionId = sessionIdInput.value;
        const attempt = attemptInput.value;

        const url = `http://localhost:8000/${sessionId}?attempt=${attempt}`;

        fetch(url, { method: 'PUT' })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // Extract the lower and upper bound
                const lowerBound = json[0];
                const upperBound = json[1];

                // Get the reference to the label element
                const lowerBoundLabel = document.getElementById('lower-bound-label');
                const upperBoundLabel = document.getElementById('upper-bound-label');

                // Update the label
                lowerBoundLabel.innerHTML = lowerBound;
                upperBoundLabel.innerHTML = upperBound;
            });
    })
});