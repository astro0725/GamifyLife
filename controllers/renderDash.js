const db = require("../models");
const User = db.User;

const renderDashboard = async (req, res) => {
  try {
    console.log(req.session);
    const userId = req.session.userId;

    if (!userId) {
      return res.redirect('/user/signin');
    }

    const user = await User.findByPk(userId, {
      attributes: ['username', 'level', 'experience', 'coins'], 
    });

    if (!user) {
      console.error('User not found');
      return res.status(404).render('error', { error: 'User not found' });
    }

    res.render('dashboard', { user: user.toJSON() });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).render('error', { error: 'Internal server error' });
  }
};

module.exports = {
  renderDashboard,
};
