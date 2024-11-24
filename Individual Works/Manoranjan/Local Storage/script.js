document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const greetingElement = document.getElementById('greeting');

    if (userForm) {
        // Handle form submission
        userForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            // Save data to local storage
            localStorage.setItem('name', name);
            localStorage.setItem('age', age);

            // Redirect to greeting page
            window.location.href = 'greet.html';
        });
    }

    if (greetingElement) {
        // Retrieve and display data
        const name = localStorage.getItem('name');

        if (name) {
            greetingElement.textContent = `Hello, ${name}!`;
        } else {
            greetingElement.textContent = 'Hello, Guest!';
        }
    }
});
