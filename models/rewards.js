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
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isRedeemed: {
        type: DataTypes.BOOLEAN,
      },
      userId: { 
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
          model: 'Users', 
          key: 'userId',
        },
        onDelete: 'SET NULL', 
        onUpdate: 'CASCADE',
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
