document.addEventListener('DOMContentLoaded', function() {
  const signinForm = document.getElementById('signinForm'); 

  if (signinForm) {
  console.log("Signin form found.");

  signinForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Email:", email);
    console.log("Password:", password); 

    fetch('/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
    })
    .then(response => {
      console.log("Response received:", response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Signin failed');
        }
    })
    .then(data => {
        console.log("Signin successful:", data);
    })
    .catch(error => {
        console.error("Error during signin:", error);
    });
  });
  } else {
      console.log("Signin form not found");
  }
});