module.exports = (sequelize, DataType) => {
    const user = sequelize.define('users', {
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
            unique: {
                msg: "E-mail já cadastrado no sistema!"
            },
            allowNull: false
        },
        'password': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'profilePic': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'recoveryKey': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'enabledNotifications': {
            type: DataType.BOOLEAN,
            defaultValue: true
        }
    }, {
        sequelize,
        tableName: 'users',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    user.associate = models => {};

    return user;
};