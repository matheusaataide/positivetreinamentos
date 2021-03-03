'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class graduations extends Model {
    static associate(models) {
      const { users } = models;
      this.belongsTo(users);
    }
  };
  graduations.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'graduations'
  });
  return graduations;
};