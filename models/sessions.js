module.exports = (sequelize, DataTypes) => {
  class Sessions extends sequelize.Sequelize.Model {}
  Sessions.init({
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER, 
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Sessions',
    timestamps: true,
  });
  Sessions.associate = models => {
      Sessions.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'sessions'
      });
    };
  return Sessions;
};