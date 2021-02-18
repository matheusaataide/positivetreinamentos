module.exports = (sequelize, DataType) => {
    const users = sequelize.define('users', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'username': {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        'name': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'email': {
            type: DataType.STRING,
            unique: true,
            defaultValue: ''
        },
        'password': {
            type: DataType.STRING,
            defaultValue: '1234'
        }, 
        'profilePic': {
            type: DataType.STRING,
            defaultValue: ''
        }
    }, {
        sequelize,
        tableName: 'users',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    users.associate = models => {
        const { graduations } = models;

        users.hasMany(graduations);
    };

    return users;
};