const { Sequelize } = require(".");

module.exports = (sequelize, DataType) => {
    const courses = sequelize.define('courses', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'title': {
            type: DataType.STRING,
            allowNull: false
        },
        'content': {
            type: DataType.STRING,
            defaultValue: ''
        }, 
        'url': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'local': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'status': {
            type: DataType.BOOLEAN,
            defaultValue: true
        },
        'img': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'date': {
            type: DataType.DATE,
            defaultValue: DataType.NOW
        }
    }, {
        sequelize,
        tableName: 'courses',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    courses.associate = models => {
        const { users, transformations } = models;
        
        courses.belongsTo(users, { as: 'createdBy' });
        courses.belongsTo(users, { as: 'updatedBy' });
        courses.belongsTo(transformations);
    };

    return courses;
};