'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('graduations', [
      { user_id: 1, content: 'Esposo da Patrícia' },
      { user_id: 1, content: 'Pai da Alícia e da Lavínia' },
      { user_id: 1, content: 'Administrador de Empresas com MBA em Gestão Comercial e Inteligência de Mercado' },
      { user_id: 1, content: 'Practitioner em Programação Neurolinguística' },
      { user_id: 1, content: 'Professional & Self Coach' },
      { user_id: 1, content: 'Treinador Comportamental' },
      { user_id: 1, content: 'Especialista em Inteligência Emocional (SBIE)' },
      { user_id: 1, content: 'MBA Executivo em Gestão Comercial & Inteligência de Mercado. (IPOG)' },
      { user_id: 2, content: 'Esposa do Rafael' },
      { user_id: 2, content: 'Mãe da Alícia e da Lavínia' },
      { user_id: 2, content: 'Administradora de Empresas com MBA em Gestão Empresarial, Gestão de Projetos, Finanças Corporativas e Gestão de Pessoas com Coaching' },
      { user_id: 2, content: 'Master Practitioner em Programação Neurolinguística (INEXH)' },
      { user_id: 2, content: 'Consteladora Sistêmica Integrativa (IBC)' },
      { user_id: 2, content: 'Treinadora Comportamental (IFT)' },
      { user_id: 2, content: 'Master Coach (IBC) para Pais, Adolescentes e Escolar (Parent Coaching)' },
      { user_id: 2, content: 'Especialista em Inteligência Emocional (SBIE)' },
      { user_id: 2, content: 'Educadora para Pais, Professores, Escolas e Empresas em Disciplina Positiva pela PDA (USA)' },
      { user_id: 2, content: 'Consultora em Encorajamento (Lynn Lott)' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('graduations', null, {});
  }
};
