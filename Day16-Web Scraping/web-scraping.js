const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio')

/* GET home page. */
router.get('/:name', async function(req, res, next) {
    axios.get(`https://economictimes.indiatimes.com/commoditysummary/symbol-${req.params.name}.cms`, { responseType: 'arraybuffer' }).then(response => {
        const buffer = new Buffer(response.data, 'binary');
        const textdata = buffer.toString(); // for string
        const $ = cheerio.load(textdata);
        const data = {
            price: $('.commodityPrice').text(),
            open: $('.openPrice').text(),
            prevClose: $('.previousClosePrice').text()
        }
        res.send(data)
    });
});

module.exports = router;
