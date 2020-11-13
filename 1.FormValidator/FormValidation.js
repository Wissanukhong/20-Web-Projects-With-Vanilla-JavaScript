const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Error ถ้าหาก username.value === '' เป็นค่าว่าง เราต้องการให้ show error นี้ออกไป
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show succes
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}


// Event listeners form submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // cancel Eveent

    // username
    if (username.value === '') {
        showError(username, 'Username is requried')
    } else {
        showSuccess(username)
    }

    // Email
    if (email.value === '') {
        showError(email, 'Email is requried')
    } else {
        showSuccess(email)
    }

    // password
    if (password.value === '') {
        showError(password, 'Password is requried')
    } else {
        showSuccess(password)
    }
    // password 2
    if (password2.value === '') {
        showError(password2, 'Password 2 is requried')
    } else {
        showSuccess(password2)
    }
});