function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorMessage = document.getElementById('error-message');

    // Reset previous error message
    errorMessage.innerText = '';

    // Validate name
    if (name === '') {
        errorMessage.innerText = 'Name is required.';
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerText = 'Invalid email address.';
        return;
    }

    // Validate password
    if (password.length < 6) {
        errorMessage.innerText = 'Password must be at least 6 characters.';
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match.';
        return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    alert('Registration successful!');
}
