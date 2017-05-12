/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RBcomponent from './RadioButtonComponent'

export default class RadioButtonExample extends Component {
  render() {
    return (
      <RBcomponent />
    );
  }
}

AppRegistry.registerComponent('osLib', () => RadioButtonExample);
