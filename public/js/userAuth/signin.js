document.addEventListener('DOMContentLoaded', function() {
  const signinForm = document.getElementById('signinSubmit');

  if (signinForm) {
      signinForm.addEventListener('click', function(event) {
          event.preventDefault(); 

          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          fetch('/user/signin', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw new Error(`error`);
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
      console.log("signinbutton not found");
  }
});