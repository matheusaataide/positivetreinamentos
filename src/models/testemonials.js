'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class testemonials extends Model {
    static associate(models) {
      const { transformations } = models;
      this.belongsTo(transformations);
    }
  };
  testemonials.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'testemonials',
  });
  return testemonials;
};