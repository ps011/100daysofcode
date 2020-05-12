const lodb = require('lodb')
const db = lodb('db.json')

const express = require('express');
const router = express.Router();

router.get('/:collection/title/:value', (req, res) => {
    const response = db(req.params.collection).find({title: req.params.value}).value();
    res.send(response)
});

router.get('/:collection/country/:value', (req, res) => {
    const response = db(req.params.collection).find({country: req.params.value}).value();
    res.send(response)
});



module.exports = router;
