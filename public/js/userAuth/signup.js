document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupSubmit');

  if (signupForm) {
      console.log("Signup form found.");

      signupForm.addEventListener('click', function(event) {
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
                console.log(err.response.data);;
              }
          })
          .then(data => {
            console.log(data);
            window.location.href = '/'; 
        })
        .catch(error => {
          console.log(err.response.data);;
        });
    });
} else {
    console.log("signupbutton not found");
}
});