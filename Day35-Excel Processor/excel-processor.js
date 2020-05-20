const csv = require('csv-parse/lib/sync');
const stringify = require('csv-stringify/lib/sync')
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const  records = csv(req.body.text, {
        columns: true,
        skip_empty_lines: true
    });
    const jsonObject = records.map(JSON.stringify);
    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    res.send(stringify(uniqueArray));
});

module.exports = router;
