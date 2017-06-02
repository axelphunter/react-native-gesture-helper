React Native Gesture Helper
=========

A small library that adds returns gesture type when gestureState is passed from the React Native pan responder.

## Installation

`npm install react-native-gesture-helper --save`

## Usage

```javascript
import React, {Component} from 'react';
import getGestureType from 'react-native-gesture-helper';

class SomeComponent extends Component {
    componentWillMount: function() {
        this._panResponder = PanResponder.create({
            onPanResponderMove: (evt, gestureState) => {
                // Add the gesture detection.
                const swipeDirection = this.getSwipeDirection(gestureState);

                // Do what you will with the results here...
            }
        });
    }
}
```

## Response

Based on the input the response returned fro the gesture should be one of the following.

* SWIPE_UP
* SWIPE_DOWN
* SWIPE_LEFT
* SWIPE_RIGHT
* CLICK

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
