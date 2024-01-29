module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
      userId: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
  }, {
      sequelize,
      modelName: 'User',
      timestamps: true,
  });
  User.associate = models => {
      User.hasMany(models.Tasks, {
          foreignKey: 'userId',
          as: 'tasks'
      });
      User.hasMany(models.Rewards, {
        foreignKey: 'userId',
        as: 'rewards'
      });
  };
  return User;
};