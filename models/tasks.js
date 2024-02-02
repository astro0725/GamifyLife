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
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false,
      },
      isCompleted: {
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