function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Sakshi' && password === 'Sakshi123') {
        // Successful login
        window.location.href = 'success.html'; // Redirect to a success page
    } else {
        // Failed login
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('hidden');
    }
}
