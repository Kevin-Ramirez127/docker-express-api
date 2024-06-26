const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DB, 'root', process.env.MYSQL_ROOT_PASSWORD, {
	dialect: 'mysql',
	port: process.env.MYSQL_DOCKER_PORT,
	host: process.env.MYSQL_HOST,
})

module.exports = sequelize;