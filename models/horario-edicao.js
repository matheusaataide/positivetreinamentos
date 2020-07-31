module.exports = (sequelize, DataType) => {
    const HorarioEdicao = sequelize.define('horarios_edicao', {
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
        tableName: 'horarios_edicao',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    HorarioEdicao.associate = models => {};

    return HorarioEdicao;
};