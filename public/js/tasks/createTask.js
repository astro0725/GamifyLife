document.getElementById('createTask').addEventListener('click', function() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('task-desc').value;
  const difficulty = document.getElementById('difficulty').value;

  let difficultyLabel = 'Low'; 
  if (difficulty == 66) {
    difficultyLabel = 'Medium';
  } else if (difficulty == 99) {
    difficultyLabel = 'High';
  }

  fetch('/task/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, difficulty: difficultyLabel }), 
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
