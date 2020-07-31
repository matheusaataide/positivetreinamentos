const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'production'; 
const config = require('../config/database.json')[env];

const loadModels = (sequelize) => {
	const models = {};
	fs.readdirSync(__dirname)
        .filter(file => 
            (file.indexOf('.') !== 0) &&
            (file !== path.basename(__filename)) && 
            (file.slice(-3) === '.js'))
        .forEach((file) => {
            const model = sequelize.import(path.join(__dirname, file));
            models[model.name] = model;
		});
	return models;
};

module.exports = () => {
	const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
    
    const models = loadModels(sequelize);    
	Object.values(models).forEach(model => {
		if(model.associate) model.associate(models);
	});
    
    const db = {
        ...models,
        sequelize,
        Sequelize
    };

    sequelize.sync({ force: false }).done(() => db);

    return db;
};