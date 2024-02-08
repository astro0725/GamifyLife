const db = require("../models");
const User= db.User;
const Task = db.Tasks;
const Reward = db.Rewards;
const { updateLevel } = require('./onComplete');

async function renderDashboard(req, res) {
  try {
      const userId = req.session.userId;
      
      const user = await User.findByPk(userId, {
          include: [
              { model: Task, as: 'tasks', where: { isCompleted: false }, required: false }, 
              { model: Reward, as: 'rewards' } 
          ]
      });

      if (!user) {
          return res.status(404).send('User not found');
      }

      updateLevel(user); 
      await user.save();

      const viewData = {
          user: {
              username: user.username,
              coins: user.coins,
              level: user.level,
              nextLevelThreshold: user.nextLevelThreshold, 
              levelProgress: user.levelProgress, 
              currentLevelThresholds: user.currentLevelThresholds 
          },
          tasks: user.tasks,
          rewards: user.rewards,
          userIsAuthenticated: true
      };

      res.render('dashboard', viewData);
  } catch (error) {
      console.error('Error rendering dashboard:', error);
      res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  renderDashboard
};