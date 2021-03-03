'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class transformations extends Model {
    static associate(models) {
      const { courses, testemonials } = models;
      this.hasMany(courses);
      this.hasMany(testemonials);
    }
  };
  transformations.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transformations',
  });
  return transformations;
};