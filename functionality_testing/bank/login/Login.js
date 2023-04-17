/*document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login logic here
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform validation and authentication
    if (username === "ronish@gmail.com" && password === "ronish") {
        
        alert("Login successful!");
        loginButton.removeAttribute('disabled');
        // Redirect to home page or perform other actions
    } else {

        alert("Invalid Email or password. Please try again.");
        loginButton.setAttribute('disabled', 'disabled');
    }
    
});

document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    // Perform forgot password logic here
    // Redirect to password recovery page or display password recovery form
});
*/
function validateForm() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');

    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        loginButton.disabled = true;
        errorMessage.textContent = '';
        
        return;
    }

    if (usernameInput.value === 'ronish@gmail.com' && passwordInput.value === 'ronish') {
        loginButton.disabled = false;
        errorMessage.textContent = '';
       
    } else {
        loginButton.disabled = true;
        errorMessage.textContent = 'Invalid username or password.';
    }
}

function forgotPsswd() {
    location.replace()
}
