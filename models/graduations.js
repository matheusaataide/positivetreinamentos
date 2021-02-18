module.exports = (sequelize, DataType) => {
    const graduations = sequelize.define('graduations', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'content': {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'graduations',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    graduations.associate = models => {
        const { users } = models;

        graduations.belongsTo(users);
    };

    return graduations;
};