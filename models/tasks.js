module.exports = (sequelize, DataTypes) => {
  class Tasks extends sequelize.Sequelize.Model {}
  Tasks.init({
      tasksId: {
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
      modelName: 'Tasks',
      timestamps: true,
  });
  Tasks.associate = models => {
    Tasks.belongsTo(models.User, { 
        foreignKey: 'userId', 
        as: 'user' 
    });
  };
return Tasks;
};