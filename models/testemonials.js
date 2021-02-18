module.exports = (sequelize, DataType) => {
    const testemonials = sequelize.define('testemonials', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'student': {
            type: DataType.STRING,
            allowNull: false
        },
        'content': {
            type: DataType.STRING,
            allowNull: false
        },
        'status': {
            type: DataType.BOOLEAN,
            defaultValue: true
        },
        'img': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'testemonials',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    testemonials.associate = models => {
        const { users, transformations } = models;

        testemonials.belongsTo(users, { as: 'createdBy' });
        testemonials.belongsTo(users, { as: 'updatedBy' });
        testemonials.belongsTo(transformations);
    };

    return testemonials;
};