document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', async function(event) { 
    if (event.target.id.startsWith('complete-task-')) {
      const tasksId = event.target.getAttribute('data-task-id'); 
      try {
        const response = await fetch(`/task/complete/${tasksId}`, { method: 'POST' });
        if (response.ok) {
          console.log(`Task ${tasksId} completed successfully.`);
        } else {
          console.error(`Failed to complete task ${tasksId}.`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
