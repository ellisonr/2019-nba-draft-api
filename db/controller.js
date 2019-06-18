const express = require('express');
const router = express.Router();
const Player = require('./model')

router.get('/:name', (req,res) => {
    Player.find({ name: req.params.name})
    .then(player => res.json(player));
});

router.post('/', (req,res) => {
    Player.create(req.body)
    .then(player => res.json(player));
});

router.put('/:name', (req,res) => {
    Player.findOneAndUpdate({ name: req.params.name}, req.body,
        {new: true})
        .then(player => res.json(player));
});

router.delete('/:name', (req,res) => {
    Player.findOneAndDelete({ name: req.params.name})
    .then(player => {
        res.json(player);
    });
});

module.exports = router;