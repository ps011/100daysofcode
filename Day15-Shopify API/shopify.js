var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET products. */
router.get('/', function(req, res, next) {
    axios.get(`https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@ps100daysofcode.myshopify.com/admin/api/2020-04/products.json`)
        .then(response => {
           res.send(response.data.products)
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;
