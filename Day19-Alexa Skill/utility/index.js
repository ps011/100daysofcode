module.exports = {
    checkIntentTypeName: checkIntentTypeName
}

function checkIntentTypeName(handlerInput, typeName, intentName) {
    let request = handlerInput.requestEnvelope.request;
    let isMatch = false;
    //インテントタイプのチェックを行う
    if (typeName && request.type === typeName) {
        isMatch = true;
    } else {
        isMatch = false;
    }
    //リクエストインテント名のチェックを行う
    if (intentName) {
        if (request.intent && request.intent.name === intentName) {
            isMatch = true;
        } else {
            isMatch = false;
        }
    }
    return isMatch;
}
