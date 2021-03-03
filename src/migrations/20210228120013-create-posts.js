'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      content: {
        type: Sequelize.TEXT,
        defaultValue: ''
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: ''
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};