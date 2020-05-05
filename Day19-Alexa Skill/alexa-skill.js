var express = require('express');
var router = express.Router();
const Alexa = require('ask-sdk');


const HelloWorldHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    }
};

/* POST request from alexa */
router.post('/', (req, res) => {


    const skill = Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            HelloWorldHandler
        )
        .create();


    skill.invoke(req.body)
        .then(function (responseBody) {
            res.json(responseBody);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send('Error during the request');
        });


});

module.exports = router;
