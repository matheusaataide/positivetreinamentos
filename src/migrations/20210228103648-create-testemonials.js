'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('testemonials', {
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
      image: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      transformation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'transformations',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('testemonials');
  }
};