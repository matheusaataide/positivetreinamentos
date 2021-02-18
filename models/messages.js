module.exports = (sequelize, DataType) => {
    const messages = sequelize.define('messages', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': {
            type: DataType.STRING,
            allowNull: false
        },
        'content': {
            type: DataType.STRING,
            allowNull: false
        },
        'viewed': {
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        'email': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'whatsapp': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'messages',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    messages.associate = models => {
        const { users } = models;

        messages.belongsTo(users, { as: 'viewedBy' });
    };

    return messages;
};