const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Api tasks esta aqui')
});

module.exports = router;