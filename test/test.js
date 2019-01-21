let assert = require('assert');
let should= require('should');
const {solveLakes} = require('../src/lakes'); 

describe('solve lakes', function() {

    it('should handle null paramter', function() {
        let arr = null; 
        (() => solveLakes(arr)).should.throw();
    });

    it('should handle array with negative numbers', function() {
        let arr = [2, 0 , -1]; 
        (() => solveLakes(arr)).should.throw();
    });

    it('should handle array with one element', function() {
        let arr = [2]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 0, volume: 0, surface: 0 });
    });

    it('should handle array with two element', function() {
        let arr = [2, 1]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 0, volume: 0, surface: 0 });
    });

    it('should handle array with three element', function() {
        let arr = [1, 0, 1]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 1, volume: 1, surface: 1 });
    });

    it('general case 1', function() {
        let arr = [7, 4, 0, 9]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 1, volume: 10, surface: 2 });
    });

    it('general case 2', function() {
        let arr = [0,1,0,2,1,0,1,3,2,1,2,1]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 3, volume: 6, surface: 5 });
    });

    it('slope directed to right', function() {
        let arr = [5, 4, 3, 2 ,1]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 0, volume: 0, surface: 0 });
    });

    it('slope directed to left', function() {
        let arr = [1, 2, 3, 4 ,5]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 0, volume: 0, surface: 0 });
    });

    it('plane surface', function() {
        let arr = [1, 1, 1, 1, 1]; 
        (solveLakes(arr)).should.be.eql({ numberOfLakes: 0, volume: 0, surface: 0 });
    });

});