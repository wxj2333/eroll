const config = {
    db_config:{
    host: 'localhost',
    database: 'mydb',
    // protocol: 'mysql',
    dialect:'mysql',
    username: 'root',
    password: 'root',
    port : 3306
    },
    query: {
        pool: true
    },
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    }
};

module.exports = config;
