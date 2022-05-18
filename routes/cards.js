const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;
const numRegex = /d+/g;

router.get('/', (req, res) => {
    const rand = Math.floor(Math.random() * data.cards.length);
    res.redirect(`${rand}?side=question`);
})

router.get('/:id', (req, res) => {
    if (!req.query.side) {
        req.query.side = 'question';
    }
    const { side } = req.query;
    const { id } = req.params;
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];
    const flipPath = () => {
        if (side === 'answer') {
            return 'question'
        } else {
            return 'answer'
        }
    }
    
    const templateData = { text, id, flipPath, name };
    if (side === 'question') {
        templateData.hint = hint;
    }
    res.render('card', templateData);
});

module.exports = router;