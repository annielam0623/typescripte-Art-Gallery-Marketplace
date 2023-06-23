"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//modules and globals
require('dotenv').config();
var cors = require('cors');
var express = require('express');
var mongoose_1 = require("mongoose");
var app = express();
var PORT = process.env.PORT;
var MONGO_URI = process.env.MONGO_URI || '';
//configuration and middleware
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose_1.default.set({ strictQuery: true });
try {
    mongoose_1.default.connect(MONGO_URI);
    console.log('DATABASE CONNECTED');
}
catch (err) {
    console.log(err);
}
//controllers and routes
var artists_controller_1 = require("./Controllers/artists_controller");
app.use('/artists', artists_controller_1.default);
var artworks_controller_1 = require("./Controllers/artworks_controller");
app.use('/artworks', artworks_controller_1.default);
var commissions_controller_1 = require("./Controllers/commissions_controller");
app.use('/commissions', commissions_controller_1.default);
app.get('/', function (req, res) {
    res.status(200).json({ message: 'Welcome to the Art-Mart API!' });
});
app.get('*', function (req, res) {
    res.status(404).json({ message: 'endpoint data not found' });
});
//listening for connections
app.listen(PORT, function () {
    console.log("\uD83C\uDFB8 Rockin' on port: ".concat(PORT));
});
module.exports = app;
