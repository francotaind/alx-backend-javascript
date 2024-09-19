const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
	describe('SUM', function() {
		it('should return 6 when adding 1.4 and 4.5', function() {
			assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});
});
