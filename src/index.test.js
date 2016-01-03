var expect = require('chai').expect;
var mma = require('./index.js');
describe('all', function(){
    it('should return an array of fighters', function(){
        expect(mma.all).to.satisfy(arrayOfStrings);
        function arrayOfStrings(array){
            return array.every(function(item){
                return typeof item ==='object'
            });
        }
    });
});
describe('random', function(){
    it('should return fighter present in Array', function(){
        var fighter = mma.random();
        expect(mma.all).to.include(fighter);
    });
});

describe('random(n)', function(){
    it('should return n random fighters', function(){
       var fighters = mma.random(3);
        expect(fighters).to.satisfy(arrayOfFighters);
        function arrayOfFighters(fighters){
            return (fighters.every(function(fighter){
                return (mma.all.indexOf(fighter) != -1)
            }) && fighters.length == 3);
        }
    });
});
