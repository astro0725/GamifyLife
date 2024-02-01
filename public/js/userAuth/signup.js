document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupSubmit');

  if (signupForm) {
      signupForm.addEventListener('click', function(event) {
          event.preventDefault(); 

          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const username = document.getElementById('username').value;

          fetch('/user/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password, username }),
          })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw new Error('Something went wrong');
              }
          })
          .then(data => {
              console.log(data);
              window.location.href = '/'; 
          })
          .catch(error => {
              console.error('Error:', error);
          });
      });
  } else {
      console.log("signupbutton not found");
  }
});