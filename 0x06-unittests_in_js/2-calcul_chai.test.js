const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
 describe('SUM operation', function() {
    it('should return 6 when adding 1.4 and 4.5', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
        });
        }); 
});
