'use strict';

var expect = require('chai').expect;
var getGestureType = require('../index');

describe('#getGestureType', function() {
    it('should convert return SWIPE_LEFT', function() {
        var result = getGestureType({"stateID":0.4409934123231769,"moveX":187.5,"moveY":149.5,"x0":294.5,"y0":149.5,"dx":-107,"dy":0,"vx":-0.4333067819709287,"vy":0,"numberActiveTouches":1,"_accountsForMovesUpTo":35884394.946718});
        expect(result).to.equal('SWIPE_LEFT');
    });
    it('should convert return SWIPE_UP', function() {
        var result = getGestureType({"stateID":0.4409934123231769,"moveX":295,"moveY":88,"x0":298,"y0":158,"dx":-3,"dy":-70,"vx":-0.02072373843473224,"vy":-0.4144747686946447,"numberActiveTouches":1,"_accountsForMovesUpTo":35886053.486799});
        expect(result).to.equal('SWIPE_UP');
    });
    it('should convert return SWIPE_RIGHT', function() {
        var result = getGestureType({"moveX":296.5,"moveY":154,"x0":202,"y0":154,"dx":94.5,"dy":0,"vx":0.5583386554515987,"vy":0,"numberActiveTouches":1,"_accountsForMovesUpTo":35885388.575593});
        expect(result).to.equal('SWIPE_RIGHT');
    });
    it('should convert return SWIPE_DOWN', function() {
        var result = getGestureType({"moveX":307,"moveY":164.5,"x0":307,"y0":118,"dx":0,"dy":46.5,"vx":0,"vy":0.5445280555134481,"numberActiveTouches":1,"_accountsForMovesUpTo":35887120.06563301});
        expect(result).to.equal('SWIPE_DOWN');
    });
    it('should convert return CLICK', function() {
        var result = getGestureType({"stateID":0.4409934123231769,"moveX":194.5,"moveY":154.5,"x0":195.5,"y0":154.5,"dx":-1,"dy":0,"vx":-0.019192993727026313,"vy":0,"numberActiveTouches":1,"_accountsForMovesUpTo":36222398.851621});
        expect(result).to.equal('CLICK');
    });
});
