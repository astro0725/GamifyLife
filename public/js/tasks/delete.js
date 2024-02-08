document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.delete-task').forEach(button => {
    button.addEventListener('click', function() {
      const taskId = this.getAttribute('data-task-id');
      deleteTask(taskId);
    });
  });
});

async function deleteTask(taskId) {
  try {
    const response = await fetch(`/task/delete/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Task deleted successfully');
      document.querySelector(`[data-task-id="${taskId}"]`).closest('.task-item').remove();
    } else {
      const error = await response.json();
      console.error('Failed to delete task:', error.message);
      alert('Failed to delete task: ' + error.message);
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}