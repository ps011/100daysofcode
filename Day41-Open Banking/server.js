const express = require('express');
const router = express.Router();
const request = require('request');
const url = 'https://developerapi.icicibank.com:8443/api/v0/checkbalance';
const queryParams = '?' +  encodeURIComponent('apikey') + '=' + encodeURIComponent(process.env.ICICI_API_KEY);

router.get('/', (req, res) => {
    request({
        url: url + queryParams,
        body: `{  "Type": "DC",  "MobileNumber": ${req.params.mobile},  "AccountNumber": ${req.params.account}"}`,
        headers: { 'Content-Type':'application/json'  },
        method: 'POST'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
        res.send(body);
    });
});

module.exports = router;
