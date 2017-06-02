'use strict';

const swipeDirections = {
	SWIPE_UP: 'SWIPE_UP',
	SWIPE_DOWN: 'SWIPE_DOWN',
	SWIPE_LEFT: 'SWIPE_LEFT',
	SWIPE_RIGHT: 'SWIPE_RIGHT',
    TAP: 'TAP',
    PINCH: 'PINCH',
    ZOOM: 'ZOOM'
};

const swipeConfig = {
	directionalOffsetThreshold: 80
};

function _isValidSwipe(velocity, directionalOffset, directionalOffsetThreshold) {
	return Math.abs(velocity) > 0 && Math.abs(directionalOffset) < directionalOffsetThreshold;
}

function _gestureIsTap(gestureState) {
	return Math.abs(gestureState.dx) < 5  && Math.abs(gestureState.dy) < 5;
}

function _gestureIsPinch(gestureState) {

}

function _gestureIsZoom(gestureState) {

}

function _isValidHorizontalSwipe(gestureState) {
	const {vx, dy} = gestureState;
	const {directionalOffsetThreshold} = swipeConfig;
	return _isValidSwipe(vx, dy, directionalOffsetThreshold);
}

function _isValidVerticalSwipe(gestureState) {
	const {vy, dx} = gestureState;
	const {directionalOffsetThreshold} = swipeConfig;
	return _isValidSwipe(vy, dx, directionalOffsetThreshold);
}

module.exports = function(gestureState) {
	const {SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN, TAP, PINCH, ZOOM} = swipeDirections;
    if(_gestureIsClick(gestureState)) return TAP;
    if(_gestureIsPinch(gestureState)) return PINCH;
    if(_gestureIsZoom(gestureState)) return ZOOM;
	const {dx, dy} = gestureState;
	if (_isValidHorizontalSwipe(gestureState)) {
		return (dx > 0)
        ? SWIPE_RIGHT
        : SWIPE_LEFT;
	} else if (_isValidVerticalSwipe(gestureState)) {
		return (dy > 0)
        ? SWIPE_DOWN
        : SWIPE_UP;
	}
	return null;
}
