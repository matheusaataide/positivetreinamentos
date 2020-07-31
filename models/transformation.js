module.exports = (sequelize, DataType) => {
    const transformation = sequelize.define('transformations', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': {
            type: DataType.STRING,
            allowNull: false
        },
        'description': {
            type: DataType.STRING,
            allowNull: false
        },
        'picture': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'transformations',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    transformation.associate = models => {};

    return transformation;
};