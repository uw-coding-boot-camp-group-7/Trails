module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
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
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  // Users.associate = function(models) {
  //   Users.hasOne(models.Passport, {
  //     onDelete: "cascade"
  //   });
  // };
  return Users;
};
