"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      chat.belongsToMany(models.user, {
        through: "userChats",
        foreignKey: "chatId",
      });
    }
  }
  chat.init(
    {
      room: DataTypes.STRING,
      author: DataTypes.INTEGER,
      receiver: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chat",
    }
  );
  return chat;
};
