document.getElementById('createReward').addEventListener('click', function() {
  const title = document.getElementById('title').value;
  const cost = document.getElementById('cost').value;

  fetch('/reward/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, cost }), 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
