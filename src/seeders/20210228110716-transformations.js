'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transformations', [
      {
        title: 'Treinamento Positive Family',
        image: '',
        status: true,
        content: ''
      },{
        title: 'Disciplina Positiva para Pais',
        image: '',
        status: true,
        content: ''
      },{
        title: 'Disciplina Positiva para Casais',
        image: '',
        status: true,
        content: ''
      },{
        title: 'Disciplina Positiva para Ambiente Escolar',
        image: '',
        status: true,
        content: ''
      },{
        title: 'Disciplina Positiva para Professores',
        image: '',
        status: true,
        content: ''
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transformations', null, {});
  }
};