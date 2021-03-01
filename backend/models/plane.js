const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const db_config=config.db_config;
const sequelize = new Sequelize(db_config);

let planeModel = sequelize.define(
    'plane',
    {
        p_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        p_name: {
            type: DataTypes.STRING,
        },
        p_number: {
            type: DataTypes.STRING,
        },
        p_mj_name: {
            type: DataTypes.STRING,
        },
        p_mj_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        // 这是其他模型参数
        timestamps: false,
        tableName: 'plane'
    }
);

module.exports = planeModel;
