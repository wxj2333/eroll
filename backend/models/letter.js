const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);


let letterModel = sequelize.define(
    'letter',
    {
        // 在这里定义模型属性
        l_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        l_name: {
            type: DataTypes.STRING,
        },
        l_address: {
            type: DataTypes.STRING,
        },
        l_state:{
            type: DataTypes.INTEGER,
        },
        l_orderid: {
            type: DataTypes.STRING,
        },
        l_s_id:{
            type: DataTypes.INTEGER,
        }
    },
    {
        // 这是其他模型参数
        timestamps: false,
        tableName: 'letter'
    }
);

module.exports = letterModel;
