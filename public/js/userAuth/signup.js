document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  if (signupForm) {
    console.log("Signup form found.");

    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const username = document.getElementById('username').value;

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Username:", username);

      try {
        const response = await fetch('/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, username }),
        });

        console.log("Response received:", response);

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            window.location.href = data.redirectUrl; 
          }
        } else {
          throw new Error('Signin failed');
        }
      } catch (error) {
        console.error("Error during signup:", error.message);
      }
    });
  } else {
    console.log("Signup form not found");
  }
});