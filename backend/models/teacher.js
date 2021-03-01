const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config')
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);

let teacherModel = sequelize.define(
    'teacher',
    {
        // 在这里定义模型属性
        t_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        t_name: {
            type: DataTypes.STRING,
        },
        t_sex:{
            type: DataTypes.BOOLEAN,
        },
        t_telephone: {
            type: DataTypes.STRING,
        },
        t_password: {
            type: DataTypes.STRING,
            defaultValue: '123456'
        }
    },
    {
        // 这是其他模型参数
        timestamps: false,
        tableName: 'teacher'
    }
);

module.exports = teacherModel;
