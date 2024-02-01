document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signinForm');

  if (signinForm) {
    console.log("Signin form found.");

    signinForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log("Email:", email);
      console.log("Password:", password);

      try {
        const response = await fetch('/user/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password}),
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
        console.error("Error during signin:", error.message);
      }
    });
  } else {
    console.log("Signin form not found");
  }
});