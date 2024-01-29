module.exports = (sequelize, DataTypes) => {
  class Rewards extends sequelize.Sequelize.Model {}
  Rewards.init({
      rewardsId: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          primaryKey: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      content: {
        type: DataTypes.STRING,
      },
      difficulty: {

      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      }
  }, {
      sequelize,
      modelName: 'Rewards',
      timestamps: true,
  });
  Rewards.associate = models => {
    Rewards.belongsTo(models.User, { 
        foreignKey: 'userId', 
        as: 'user' 
    });
  };
return Rewards;
};