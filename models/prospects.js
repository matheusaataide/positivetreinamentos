module.exports = (sequelize, DataType) => {
    const prospects = sequelize.define('prospects', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': {
            type: DataType.STRING,
            allowNull: false
        },
        'email': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'whatsapp': {
            type: DataType.STRING,
            defaultValue: ''
        }, 
        'type': {
            type: DataType.STRING,
            defaultValue: 'all'
        }
    },{
        sequelize,
        tableName: 'prospects',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    prospects.associate = models => {};

    return prospects;
};