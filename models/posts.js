module.exports = (sequelize, DataType) => {
    const posts = sequelize.define('posts', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'title': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'content': {
            type: DataType.TEXT,
            defaultValue: ''
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
        tableName: 'posts',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    posts.associate = models => {
        const { users } = models;

        posts.belongsTo(users, { as: 'createdBy' });
        posts.belongsTo(users, { as: 'updatedBy' });
    };

    return posts;
};