'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'rafael',
        name: 'Rafael Barbosa',
        email: 'rafael@email.com',
        password: 'positive.rb',
        photo: 'rafael.jpg'
      },
      {
        username: 'patricia',
        name: 'Patrícia Carvalho',
        email: 'patricia@email.com',
        password: 'positive.pc',
        photo: 'patricia.jpg'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
