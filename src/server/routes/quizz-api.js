const express = require('express');
const quizzes = require('../db/quiz');

const router = express.Router()



router.get('/quizesapi', (req, res) => {
    
    if (!req.user) {
        res.status(401).send();
        return;
    } else {
        const payload = quizzes;
        res.status(201).json(payload);
    }   
});

module.exports = router
