'use strict';
const { Model } = require('sequelize-v5');

module.exports = (sequelize, DataTypes) => {
	class users extends Model {
    	static associate(models) {
      		const { graduations } = models;
      		this.hasMany(graduations);
    	}
  	};
  
	users.init({
    	username: DataTypes.STRING,
    	password: DataTypes.STRING,
    	name: DataTypes.STRING,
    	email: DataTypes.STRING,
    	photo: DataTypes.STRING
  	},{
    	sequelize,
    	modelName: 'users'
  	});
  
	return users;
};