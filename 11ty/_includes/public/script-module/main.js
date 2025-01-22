document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        // Save user to session storage
        //localStorage.setItem('supabaseUser', JSON.stringify(data));
        alert('Logged in successfully!');
        // Redirect or handle logged-in state here
    }
    //} catch (err) {
    //console.error('Unexpected Error:', err);
    //alert('An unexpected error occurred. Please try again.');
    //}
});

// Handle signup form submit
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        });

        if (error) {
            alert(`Error: ${error.message}`);
        } else {
            // Save user to session storage
            //localStorage.setItem('supabaseUser', JSON.stringify(data));
            alert('Signup successful! Check your email for confirmation.');
        }
    } catch (err) {
        console.error('Unexpected Error:', err);
        alert('An unexpected error occurred. Please try again.');
    }
});

// Handle forgot password form submit
document.getElementById('forgot-password-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('forgot-email').value;

    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email);

        if (error) {
            alert(error.message);
        } else {
            alert('Password reset link sent!');
            // Redirect or show message after reset link is sent
        }
    } catch (err) {
        console.error('Unexpected Error:', err);
        alert('An unexpected error occurred. Please try again.');
    }
});