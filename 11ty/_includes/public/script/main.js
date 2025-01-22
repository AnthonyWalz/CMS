
// Toggle between login and signup forms
function toggleForm() {
    var loginForm = document.getElementById('login');
    var signupForm = document.getElementById('signup');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}
// Show forgot password form
function showForgotPasswordForm() {
    var loginForm = document.getElementById('login');
    var forgotPasswordForm = document.getElementById('forgot-password');

    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
}

// Show login form
function showLoginForm() {
    var forgotPasswordForm = document.getElementById('forgot-password');
    var loginForm = document.getElementById('login');

    forgotPasswordForm.style.display = 'none';
    loginForm.style.display = 'block';
}