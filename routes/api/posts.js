const express = require('express');
const router = express.Router();

//GET api/posts / Test route / Public route

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
