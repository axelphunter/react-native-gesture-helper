'use strict';

const swipeDirections = {
	SWIPE_UP: 'SWIPE_UP',
	SWIPE_DOWN: 'SWIPE_DOWN',
	SWIPE_LEFT: 'SWIPE_LEFT',
	SWIPE_RIGHT: 'SWIPE_RIGHT',
    PAN_UP: 'PAN_UP',
    PAN_DOWN: 'PAN_DOWN',
    PAN_LEFT: 'PAN_LEFT',
    PAN_RIGHT: 'PAN_RIGHT',
    TAP: 'TAP'
};

function _isValidSwipe(velocity, velocityThreshold, directionalOffset, directionalOffsetThreshold) {
	return Math.abs(velocity) > velocityThreshold && Math.abs(directionalOffset) < directionalOffsetThreshold;
}

function _gestureIsTap(gestureState) {
	return Math.abs(gestureState.dx) < 5  && Math.abs(gestureState.dy) < 5;
}

function _isValidHorizontalSwipe(gestureState, velocityThreshold, directionalOffsetThreshold) {
	const {vx, dy} = gestureState;
	return _isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
}

function _isValidVerticalSwipe(gestureState, velocityThreshold, directionalOffsetThreshold) {
	const {vy, dx} = gestureState;
	return _isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
}

module.exports = function(gestureState, velocityThreshold = 0.4, directionalOffsetThreshold = 80) {
	const {SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN, PAN_LEFT, PAN_RIGHT, PAN_UP, PAN_DOWN, TAP} = swipeDirections;
    if(_gestureIsTap(gestureState)) return TAP;
	const {dx, dy} = gestureState;
	if (_isValidHorizontalSwipe(gestureState, velocityThreshold, directionalOffsetThreshold)) {
		return (dx > 0)
        ? SWIPE_RIGHT
        : SWIPE_LEFT;
	} else if (_isValidVerticalSwipe(gestureState, velocityThreshold, directionalOffsetThreshold)) {
		return (dy > 0)
        ? SWIPE_DOWN
        : SWIPE_UP;
	}
    if(Math.abs(dx) > Math.abs(dy)) {
        return (dx > 0)
        ? PAN_RIGHT
        : PAN_LEFT
    }
    return (dy > 0)
    ? PAN_DOWN
    : PAN_UP
}
