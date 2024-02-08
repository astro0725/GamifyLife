document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', function(event) {
    if (event.target.id.startsWith('delete-task-')) {
      const tasksId = event.target.getAttribute('data-task-id');
      if (tasksId) {
        console.log('Delete button clicked for task ID:', tasksId);
        deleteTask(tasksId);
      }
    }
  });
});


async function deleteTask(tasksId) {
  try {
    const response = await fetch(`/task/delete/${tasksId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Task deleted successfully');
      window.location.href = '/dashboard';
    } else {
      const error = await response.json();
      console.error('Failed to delete task:', error.message);
      alert('Failed to delete task: ' + error.message);
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}