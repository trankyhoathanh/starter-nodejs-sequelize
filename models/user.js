const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      name: type.STRING
    },
    {
      tableName: 'user'
    })
}