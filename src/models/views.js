'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class views extends Model {
    static associate(models) {
      // define association here
    }
  };
  views.init({
    path: DataTypes.STRING,
    page_type: DataTypes.STRING,
    page_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'views',
  });
  return views;
};