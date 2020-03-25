const Sequelize = require('sequelize');
const connect = require('./connect.js');

const sequelize = connect.sequelize;

module.exports = sequelize.define('Starboard',{
	user: {
		type: Sequelize.STRING,
		allowNull: false
	},
	starsGiven: {
		type: Sequelize.INTEGER,
		default: 0
	},
	starsRecieved: {
		type: Sequelize.INTEGER,
		default: 0
	}
});