"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init(
    {
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.STRING,
      health: DataTypes.STRING,
      unitOfWeight: DataTypes.STRING,
      owner: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pets",
    }
  );
  return Pets;
};
