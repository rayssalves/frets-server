"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rating.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  rating.init(
    {
      ownerId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      stars: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "rating",
    }
  );
  return rating;
};
