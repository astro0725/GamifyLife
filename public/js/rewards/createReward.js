document.getElementById('createReward').addEventListener('click', function() {
  const title = document.getElementById('rew-title').value;
  const cost = document.getElementById('cost').value;
  const description = document.getElementById('rew-desc').value;

  fetch('/reward/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, cost, description}), 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
