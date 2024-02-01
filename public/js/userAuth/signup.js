document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm'); 

  if (signupForm) {
  console.log("Signup form found.");

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    console.log("Email:", email);
    console.log("Password:", password); 
    console.log("Username:", username);

    fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
    })
    .then(response => {
      console.log("Response received:", response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Signup failed');
        }
    })
    .then(data => {
        console.log("Signup successful:", data);
        window.location.href = '/'; 
    })
    .catch(error => {
        console.error("Error during signup:", error.message);
    });
  });
  } else {
      console.log("Signup form not found");
  }
});