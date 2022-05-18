const express = require('express');
const router = express.Router();

//designate a property 'massage' on req
router.use((req, res, next) => {
    req.massage = "You get a massage!";
    next();
});
//log that property even though we're in a separate function
router.use((req, res, next) => {
    console.log(req.massage);
    next();
});


router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.all('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;