const express = require('express');
const router = express.Router();
const coinbase = require('coinbase-pro');
const BTC_USD = 'BTC-USD';
const apiURI = 'https://api.gdax.com';
const publicClient = new coinbase.PublicClient();
const authedClient = new coinbase.AuthenticatedClient(process.env.COINBASE_KEY, process.env.COINBASE_SECRET, process.env.COINBASE_PASSPHRASE, apiURI);
let lastPrice = 0;

router.get('/', (req, res) => {
    res.send('Created a command line Cryptocurrency Trading BOT. Since it is command line, It cannot be viewed on a Webpage');
});


const getProducts = () => {
    const callback = (error, response, data) => {
        if (error)
            return console.dir(error);

        console.dir(data);
        res.send(data)
    };
    publicClient.getProducts(callback);
};

const getPrices = () => {
    const websocket = new coinbase.WebsocketClient([BTC_USD]);

    const websocketCallback = (data) => {
        if (!(data.type === 'done' && data.reason === 'filled') && !data.price)
            return;
       startTrading(data.price);
    };
    websocket.on('message', websocketCallback);
};

const placeBuy = (buyData) => {
    const buyParams = {
        'price': buyData.price,
        'size': buyData.size,
        'product_id': BTC_USD,
    };
    return authedClient.buy(buyParams, callback);
};

const placeSell = (buyData) => {
    const sellParams = {
        'price': buyData.price,
        'size': buyData.size,
        'product_id': BTC_USD,
    };
    return authedClient.sell(sellParams,  callback);
};

const startTrading = (currentPrice) => {
    console.log('Current Price', currentPrice, 'Last Price', lastPrice)
    if (currentPrice > lastPrice) {
        console.log('Order Placed')
    } else if (currentPrice < lastPrice) {
        console.log('Coins Sold')
    } else {
        console.log('No Action')
    }
    lastPrice = currentPrice;
};

const init = (args) => {
    if (args[2] === 'start') {
      getPrices();
    }
};

init(process.argv);

module.exports = router;
