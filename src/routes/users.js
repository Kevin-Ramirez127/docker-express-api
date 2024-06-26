var express = require('express');
var router = express.Router();
const connect = require('../database/connect.js');

async function authenticate() {
	try {
		await connect.authenticate();
		console.log("Database connected successfully 😝");
	} catch (err) {
		console.log("Cannot connect to database 😓", err);
	}
}

authenticate();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
