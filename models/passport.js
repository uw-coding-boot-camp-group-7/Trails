module.exports = function(sequelize, DataTypes) {
  var Passport = sequelize.define("Passport", {
    photo: {
      type: DataTypes.LONGBLOB
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Seattle"
    },
    bio: {
      type: DataTypes.TEXT
    },
    hikedTrails: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wishTrails: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Passport;
};
