const bodyParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

let db = null;

const url =
    'mongodb://offinbed:0100403Nn@ds247690.mlab.com:47690/t7-chicken-plus';

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    db = client.db('t7-chicken-plus');

    app.listen(8000, () => console.log('listening on port 8000'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    db.collection('character-data').find().toArray((err, result) => {
        if (err) throw err;

        console.log('result', result);
        res.send(result);
    });
});
