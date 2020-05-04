const vision = require('@google-cloud/vision');
const express = require('express');
const router = express.Router();

/* POST image */
router.post('/', async (req, res) => {
    let texts = [];
    const client = new vision.ImageAnnotatorClient();
    // const fileName = ;
    try {
    const [result] = await client.textDetection(req.body.file);
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => texts.push(text.description));
    res.send(JSON.stringify(texts))
} catch (e) {
    console.log(e)
}
});

module.exports = router;

