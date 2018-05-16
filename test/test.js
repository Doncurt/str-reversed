'use strict';

var expect = require('chai').expect;
var strReversed = require('../index');

describe('#str-reversed', function() {
    it('should reverse this string', function() {
        var result = strReversed('abbas');
        expect(result).to.equal('sabba');
    });

    it('should reverse donny to ynnod', function() {
      var result = strReversed('donny');
      expect(result).to.equal('ynnod');
    });

    it('should reverse adams to smada', function() {
        var result = strReversed('adams');
        expect(result).to.equal('smada');
    });

    it('should reverse data to atad', function() {
        var result = strReversed('data');
        expect(result).to.equal('atad');
    });
});
