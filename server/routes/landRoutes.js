const express = require("express");
const cardController = require('../controllers/landControllers');
const landRouter = express.Router();

landRouter.get('/', cardController.getAllCards);
landRouter.post('/', cardController.addCard);

module.exports = landRouter;