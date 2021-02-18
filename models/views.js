module.exports = (sequelize, DataType) => {
    const Views = sequelize.define('views', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'path': DataType.STRING,
        'pageType': DataType.STRING,
        'pageId': DataType.INTEGER
    }, {
        sequelize,
        tableName: 'views',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    Views.associate = models => {};

    return Views;
};