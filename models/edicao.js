module.exports = (sequelize, DataType) => {
    const Edicao = sequelize.define('edicoes', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'numero_turma': {
            type: DataType.STRING,
            allowNull: false
        },
        'imagem': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'edicoes',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    Edicao.associate = models => {};

    return Edicao;
};