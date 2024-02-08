module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}
  User.init({
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true,
          autoIncrement: true
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
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
    User.hasMany(models.Sessions, { 
      foreignKey: 'userId', 
    });
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