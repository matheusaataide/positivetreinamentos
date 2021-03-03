'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class sections extends Model {
    static associate(models) {
      // define association here
    }
  };
  sections.init({
    name: DataTypes.STRING,
    key: DataTypes.STRING,
    value: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'sections',
  });
  return sections;
};