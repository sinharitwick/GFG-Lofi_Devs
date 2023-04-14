const express = require('express');
const app = express();
const schemes = require('../schemes.json');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(schemes);
});

module.exports = router;
