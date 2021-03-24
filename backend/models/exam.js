const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);

let examModel = sequelize.define(
    'exam',
    {
        // 在这里定义模型属性
        e_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        e_name: {
            type: DataTypes.STRING,
        },
        e_admission: {
            type: DataTypes.STRING,
        },
        e_date: {
            type: DataTypes.DATE,
            defaultValue: Date.parse(new Date()) / 1000
        },
        e_nation:{
            type: DataTypes.STRING,
        },
        e_sex:{
            type: DataTypes.BOOLEAN,
        },
        e_major: {
            type: DataTypes.STRING,
        },
        e_place: {
            type: DataTypes.STRING,
        },
        e_address: {
            type: DataTypes.STRING,
        },
        e_idno: {
            type: DataTypes.STRING,
        },
        e_s_id:{
            type: DataTypes.INTEGER,
        }
    },
    {
        // 这是其他模型参数
        timestamps: false,
        tableName: 'exam'
    }
);

module.exports = examModel;
