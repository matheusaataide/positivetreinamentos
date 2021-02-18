module.exports = (sequelize, DataType) => {
    const sections = sequelize.define('sections', {
        'id': {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'sectionName': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'key': {
            type: DataType.STRING,
            defaultValue: ''
        },
        'value': {
            type: DataType.TEXT,
            defaultValue: ''
        },
        'status': {
            type: DataType.BOOLEAN,
            defaultValue: true
        },
    }, {
        sequelize,
        tableName: 'sections',
        underscoredAll: true,
        underscored: true,
        freezeTableName: true
    });

    sections.associate = models => {
        const { users } = models;

        sections.belongsTo(users, { as: 'updatedBy' });
    };

    return sections;
};