module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Users.associate = function(models) {
    Users.hasOne(models.Passport, {
      onDelete: "cascade"
    });
  };
  return Users;
};
