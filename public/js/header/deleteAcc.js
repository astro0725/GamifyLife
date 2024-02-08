document.getElementById('deleteAcc').addEventListener('click', async function(event) {
  event.preventDefault();

  try {
    const response = await fetch('/user/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('User deleted successfully');
      window.location.href = '/user/signUp';
    } else {
      console.error('Failed to delete user:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
});
