/**
 * Main component
 */
'use strict';

import React from 'react-native';
import Button from 'react-native-button';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import { connect, Provider } from 'react-redux/native';
import { createStore } from 'redux';


/**
 * State / Reduce
 */

const start = {
  count: 0,
};

const reduce = (state, action) => {
  switch (action.type) {
    case 'CLICK':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};


/**
 * Render
 */

const App = connect(
  ({ count }) => ({ count })
)(
  ({ count, dispatch }) => (
    <View style={styles.appContainer}>

      <View style={styles.appContainer}>
        <Text>
        CLICKED {count} TIME{count === 1 ? '' : 'S'}!
        </Text>
      </View>

      <View style={styles.buttonContainer}>

        <Button
          style={styles.button}
          onPress={() => dispatch({ type: 'CLICK' })}
        >
        +
        </Button>
      </View>

    </View>
  )
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginRight: -325
  },
  button: {
    fontSize: 100,
    color: 'green'
  }
});


/**
 * Main
 */

const Main = () => (
  <Provider store={createStore(reduce, start)}>
    {() => <App />}
  </Provider>
);

AppRegistry.registerComponent('main', () => Main);
