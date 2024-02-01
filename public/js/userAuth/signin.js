document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signinForm');

  if (signinForm) {
    console.log("Signin form found.");

    signinForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const username = document.getElementById('username').value;

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Username:", username);

      try {
        const response = await fetch('/user/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, username }),
        });

        console.log("Response received:", response);

        if (response.ok) {
          const data = await response.json();
          console.log("Signin successful:", data);
        } else {
          throw new Error('Signin failed');
        }
      } catch (error) {
        console.error("Error during signin:", error.message);
      }
    });
  } else {
    console.log("Signin form not found");
  }
});