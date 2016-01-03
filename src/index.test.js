var expect = require('chai').expect;
var mma = require('./index.js');
describe('all', function(){
    it('should return an array of strings', function(){
        expect(mma.all).to.satisfy(arrayOfStrings);
        function arrayOfStrings(array){
            return array.every(function(item){
                return typeof item ==='string'
            });
        }
    });
    it('should contain Rafael Dos Anjos', function(){
        expect(mma.all).to.include('Rafael Dos Anjos')
    });
});
describe('random', function(){
    it('should return fighter present in Array', function(){
        var fighter = mma.random();
        expect(mma.all).to.include(fighter);
    });
});
