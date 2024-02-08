document.getElementById('difficulty').addEventListener('input', function() {
  const difficultyValue = this.value;
  let difficultyLabel = 'Low'; 
  if (difficultyValue == 66) {
    difficultyLabel = 'Medium';
  } else if (difficultyValue == 99) {
    difficultyLabel = 'High';
  }
  document.getElementById('difficultyLabel').innerText = difficultyLabel;
});

document.getElementById('createTask').addEventListener('click', function() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('task-desc').value;
  const difficulty = document.getElementById('difficulty').value;

  fetch('/task/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, difficulty }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
