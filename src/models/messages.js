'use strict';
const {
  Model
} = require('sequelize-v5');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  messages.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};