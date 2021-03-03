'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    static associate(models) {
      const { transformations } = models;
      this.belongsTo(transformations);
    }
  };
  courses.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url_form: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'courses'
  });
  return courses;
};