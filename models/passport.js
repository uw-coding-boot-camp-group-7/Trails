module.exports = function(sequelize, DataTypes) {
  var Passport = sequelize.define("Passport", {
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Seattle"
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
