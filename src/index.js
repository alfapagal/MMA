var mma = require('./fighters.json');
var random = require('unique-random-array');
module.exports = {
    all : mma,
    random : random(mma)
};