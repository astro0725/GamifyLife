module.exports = (sequelize, DataTypes) => {
  class Rewards extends sequelize.Sequelize.Model {}
  Rewards.init({
      rewardsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      isRedeemed: {
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