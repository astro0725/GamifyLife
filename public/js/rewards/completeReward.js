document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', async function(event) { 
    if (event.target.id.startsWith('redeem-reward-')) {
      const rewardsId = event.target.getAttribute('data-reward-id'); 
      try {
        const response = await fetch(`/reward/redeem/${rewardsId}`, { method: 'POST' });
        if (response.ok) {
          console.log(`Reward ${rewardsId} redeemed successfully.`);
        } else {
          console.error(`Failed to redeem reward ${rewardsId}.`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
