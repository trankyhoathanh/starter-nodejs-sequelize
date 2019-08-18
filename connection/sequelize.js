const Sequelize = require('sequelize')
const UserModel = require('../models/user')

//var sqlite3 = require('sqlite3').verbose();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false
});

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
    console.log(`Database & tables OK`)
})

module.exports = {
    User
}