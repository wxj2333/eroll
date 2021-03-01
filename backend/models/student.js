const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);


let studentModel = sequelize.define(
	'student',
	{
		// 在这里定义模型属性
		s_id:{
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		s_name: {
			type: DataTypes.STRING,
		},
		s_sex:{
			type: DataTypes.BOOLEAN,
		},
		s_nation: {
			type: DataTypes.STRING,
		},
		s_idno: {
			type: DataTypes.STRING,
		},
		s_major: {
			type: DataTypes.STRING,
		},
		s_telephone: {
			type: DataTypes.STRING,
		},
		s_address: {
			type: DataTypes.STRING,
		},
		s_password: {
			type: DataTypes.STRING,
			defaultValue: '123456'
		},
		s_state: {
			type: DataTypes.STRING,
			defaultValue: '0'
		},


	},
	{
		// 这是其他模型参数
		timestamps: false,
		tableName: 'student'
	}
);

module.exports = studentModel;
