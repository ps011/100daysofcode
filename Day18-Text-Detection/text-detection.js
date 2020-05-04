const vision = require('@google-cloud/vision');
const express = require('express');
const router = express.Router();

/* POST image */
router.post('/', async (req, res) => {
        const texts = [];
        const client = new vision.ImageAnnotatorClient();
        const [result] = await client.textDetection(req.body);
        const detections = result.textAnnotations;
        detections.forEach(text => texts.push(text.description));
        res.send(JSON.stringify(texts));
});
module.exports = router;

