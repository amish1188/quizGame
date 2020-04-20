const express = require('express');
const quizzes = require('../db/quiz');

const router = express.Router()



router.get('/quizesapi', (req, res) => {
    
    
    res.status(201).json(quizzes)
});

module.exports = router
