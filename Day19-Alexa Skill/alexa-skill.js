var express = require('express');
var router = express.Router();

const Util = require('./utility');

const LaunchHandler = {
    canHandle(handlerInput) {
        return Util.checkIntentTypeName(handlerInput, 'LaunchRequest');
    },
    async handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('Welcome to Prasheel\'s Air Quality Index')
            .getResponse();
    }
}

// Help Handler
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return (Util.checkIntentTypeName(handlerInput, 'IntentRequest', 'AMAZON.HelpIntent'));
    },
    async handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('We are happy to help you')
            .getResponse();
    }
}

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder
            .speak('Something went wrong but we are on to it')
            .getResponse();
    },
};

const Alexa = require('ask-sdk-core');
const { ExpressAdapter } = require('ask-sdk-express-adapter');
const skillBuilder = Alexa.SkillBuilders.custom()
    .addRequestHandlers(HelpIntentHandler)
    .addErrorHandlers(ErrorHandler);
const skill = skillBuilder.create();
const adapter = new ExpressAdapter(skill, true, true);

/* POST request from alexa */
router.post('/', adapter.getRequestHandlers());




module.exports = router;
