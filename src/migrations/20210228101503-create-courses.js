'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      url_form: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
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
    await queryInterface.dropTable('courses');
  }
};