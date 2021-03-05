'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  posts.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};