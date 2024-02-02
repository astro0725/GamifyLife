// Assuming you have a User model set up with Sequelize
const db = require('../models');
const User = db.User;
const { authenticateToken } = require('../utils/auth');

router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('dashboard', { user: user.toJSON() });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal server error');
  }
});
