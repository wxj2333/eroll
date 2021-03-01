const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);

let applyModel = sequelize.define(
    'apply',
    {
        // 在这里定义模型属性
        a_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        a_name: {
            type: DataTypes.STRING,
        },
        a_major: {
            type: DataTypes.STRING,
        },
        a_soccer: {
            type: DataTypes.INTEGER,
        },
        a_s_id: {
            type: DataTypes.INTEGER,
        },
        a_date: {
            type: DataTypes.DATE,
            defaultValue: Date.parse(new Date()) / 1000
        },
        a_state:{
            type: DataTypes.BOOLEAN,
            defaultValue:'0'
        }
    },
    {
        // 这是其他模型参数
        timestamps: false,
        tableName: 'apply'
    }
);

module.exports = applyModel;
