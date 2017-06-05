[![Build Status](https://travis-ci.org/axelphunter/react-native-gesture-helper.svg?branch=master)](https://travis-ci.org/axelphunter/react-native-gesture-helper)

[![Coverage Status](https://coveralls.io/repos/github/axelphunter/react-native-gesture-helper/badge.svg?branch=master)](https://coveralls.io/github/axelphunter/react-native-gesture-helper?branch=master)

React Native Gesture Helper
=========

A small library that adds returns gesture type when gestureState, the velocity threshold and the directional offset threshold is passed from the React Native pan responder.

### Content
- [Installation](#installation)
- [Usage example](#usage)
- [Function params](#function-params)
- [Response](#response)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions?](#questions)

## Installation

`npm install react-native-gesture-helper --save`

## Usage
Depending on the velocityThreshold and directionalOffsetThreshold the library will return wether or not the gestures is a swipe or a pan.

```javascript
import React, {Component} from 'react';
import getGestureType from 'react-native-gesture-helper';

class SomeComponent extends Component {
    componentWillMount: function() {
        this._panResponder = PanResponder.create({
            onPanResponderMove: (evt, gestureState) => {
                // Add the gesture detection.
                const velocityThreshold = 0.4;
                const directionalOffsetThreshold = 80;
                const swipeDirection = getGestureType(gestureState, velocityThreshold, directionalOffsetThreshold);

                // Do what you will with the results here...
            }
        });
    }
}
```

### Function params

| Param | Default | type | description |
| ---- | ---- | ---- | ---- |
| gestureState | null | Object | The gestureState value returned from the react Native PanResponder api |
| velocityThreshold | 0.4 | Number | The Velocity threshold that decides wether the gesture is a swipe or a pan |
| directionalOffsetThreshold | 80 | Number | The directional offset threshold of the gesture |


## Response

Based on the input the response returned fro the gesture should be one of the following.

* SWIPE_UP
* SWIPE_DOWN
* SWIPE_LEFT
* SWIPE_RIGHT
* PAN_UP
* PAN_DOWN
* PAN_LEFT
* PAN_RIGHT
* TAP

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

### Questions?
Feel free to contact me in [twitter](https://twitter.com/axelphunter) or [create an issue](https://github.com/axelphunter/react-native-gesture-helper/issues/new)
