'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '#P0s1T1v3.'
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING,
        defaultValue: ''
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};