const express = require("express")
var myFunctions = require('../controllers/user-controller');

const router = express.Router();

router.get('/', myFunctions.getAllUsers);
router.post('/signup', myFunctions.signup);
router.post('/login', myFunctions.login);

module.exports = router;