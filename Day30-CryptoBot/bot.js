const express = require('express');
const router = express.Router();
const coinbase = require('coinbase-pro');

router.get('/', (req, res) => {

    const publicClient = new coinbase.PublicClient();

    const callback = (error, response, data) => {
        if (error)
            return console.dir(error);

        return console.dir(data);
        res.send(data)
    };
    publicClient.getProducts(callback);
});

module.exports = router;
