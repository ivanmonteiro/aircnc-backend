const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const app = express();


let dbdata = fs.readFileSync(path.resolve(__dirname, 'config', 'dbconfig.json'));
let dbconfig = JSON.parse(dbdata);
console.log(dbconfig);

mongoose.connect(dbconfig.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
