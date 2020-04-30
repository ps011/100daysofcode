const express = require('express');
const user = require('./user.schema');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await user.find({});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.post('/create', async (req, res) => {
    try {
        const result = await user.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            city: req.body.city,
            company: req.body.company,
            status: req.body.status
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await user.findById(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        const result = await user.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;
