var mma = require('./fighters.json');
var random = require('unique-random-array');
module.exports = {
    all : mma,
    random : function(n){
        if(n === undefined)
            return random(mma)();
        var result = [];
        for(i = 0; i < n; i++){
            result.push(random(mma)())
        }
        return result;
    }
};