const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const quizzApi = require('./routes/quizz-api');

const app = express();

app.use(bodyParser.json());

app.use('/api', quizzApi);

app.use(express.static('public'));

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;