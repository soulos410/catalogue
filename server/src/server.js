const express = require('express');
const mongoose = require('mongoose');

const server = express();
server.use(express.json());
const {
    port,
    uri,
} = require('../config.json');

const {
    Schema,
} = mongoose;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
}).then(() => console.log('Connected'));

const database = mongoose.connection;

database.once('open', () => {
    console.log('In database');
});

const dbSchema = new Schema({
    title: String,
    brand: String,
    date: Number,
    os: String,
    uri: String,
});

const Model = mongoose.model('Mobiles', dbSchema, 'mobiles');
server.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
});

server.get('/findPhones', (req, res) => {
    const parsedReq = req.query;
    let currentPage = 0;
    if (parsedReq.page) {
        currentPage = Number(parsedReq.page);
        delete parsedReq.page;
    }
    parsedReq.data && Object.defineProperty(parsedReq, 'data', { value: Number(parsedReq.data) });
    parsedReq.mobileId && Object.defineProperty(parsedReq, 'mobileId', { value: Number(parsedReq.mobileId) });
    Model.find(parsedReq, (err, docs) => {
        res.send(docs);
    }).limit(10).skip(10 * currentPage);
});
