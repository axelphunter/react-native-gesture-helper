'use strict';

var expect = require('chai').expect;
var getGestureType = require('../index');

describe('#getGestureType', function() {
    it('should convert return SWIPE_LEFT', function() {
        var result = getGestureType({ "dx":-10, "dy":0, "vx":-0.4, "vy":0 });
        expect(result).to.equal('SWIPE_LEFT');
    });
    it('should convert return SWIPE_UP', function() {
        var result = getGestureType({ "dx":0, "dy":-10, "vx":0, "vy":-0.4 });
        expect(result).to.equal('SWIPE_UP');
    });
    it('should convert return SWIPE_RIGHT', function() {
        var result = getGestureType({ "dx":10, "dy":0, "vx":0.4, "vy":0 });
        expect(result).to.equal('SWIPE_RIGHT');
    });
    it('should convert return SWIPE_DOWN', function() {
        var result = getGestureType({ "dx":0, "dy":10, "vx":0, "vy":0.4 });
        expect(result).to.equal('SWIPE_DOWN');
    });
    it('should convert return PAN_LEFT', function() {
        var result = getGestureType({ "dx":-10, "dy":0, "vx":-0.2, "vy":0 });
        expect(result).to.equal('PAN_LEFT');
    });
    it('should convert return PAN_UP', function() {
        var result = getGestureType({ "dx":0, "dy":-10, "vx":0, "vy":-0.2 });
        expect(result).to.equal('PAN_UP');
    });
    it('should convert return PAN_RIGHT', function() {
        var result = getGestureType({ "dx":10, "dy":0, "vx":0.2, "vy":0 });
        expect(result).to.equal('PAN_RIGHT');
    });
    it('should convert return PAN_DOWN', function() {
        var result = getGestureType({ "dx":0, "dy":10, "vx":0, "vy":0.2 });
        expect(result).to.equal('PAN_DOWN');
    });
    it('should convert return TAP', function() {
        var result = getGestureType({ "dx":0, "dy":0, "vx":0, "vy":0 });
        expect(result).to.equal('TAP');
    });
});
