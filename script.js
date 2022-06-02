const username = document.getElementById('username');
const email = document.getElementById('mail');
const password = document.getElementById("pass1");
const confirm_password = document.getElementById("pass2");


// validate username
username.addEventListener('input', function (e) {
    if (username.checkValidity() == true) {
        username.style.border = "2px solid #00FF00";
    } else if (username.value.length < 3) {
        username.setCustomValidity("Please enter a username \
        that is at least 3 characters long!");
        username.style.border = "2px solid #FF0000";
    } else if (username.value.length == 3) {
        username.setCustomValidity("");
        username.style.border = "2px solid #00FF00";
    }
});

// Show password on click
const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

// confirm passwords match
confirm_password.addEventListener('input', function (e) {
    if (confirm_password.checkValidity() == true) {
        confirm_password.style.border = "2px solid #00FF00";
    } else if (confirm_password.value != password.value) {
        confirm_password.setCustomValidity("Passwords do not match!");
        confirm_password.style.border = "2px solid #FF0000";
    } else if (confirm_password.value == password.value) {
        confirm_password.setCustomValidity("");
        confirm_password.style.border = "2px solid #00FF00";
    }
});