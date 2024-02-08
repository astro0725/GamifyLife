document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', function(event) {
    if (event.target.id.startsWith('delete-reward-')) {
      const rewardsId = event.target.getAttribute('data-reward-id');
      if (rewardsId) {
        console.log('Delete button clicked for reward ID:', rewardsId);
        deleteReward(rewardsId);
      }
    }
  });
});


async function deleteReward(rewardsId) {
  try {
    const response = await fetch(`/reward/delete/${rewardsId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Reward deleted successfully');
    } else {
      const error = await response.json();
      console.error('Failed to delete reward:', error.message);
      alert('Failed to delete reward: ' + error.message);
    }
  } catch (error) {
    console.error('Error deleting reward:', error);
  }
}