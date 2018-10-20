/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Actions } from "react-native-router-flux"
import { Router, Scene, Tabs, Stack, Overlay } from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import couponScreen from "./stacks/couponScreen";
import mapScreen from "./stacks/mapScreen";
import profilScreen from "./stacks/profilScreen";


const TabIcon = ({ focused, title }) => {
  if (title === "Kaffee") {
    return (
      <Icon
        name="coffee"
        color={focused ? Colors.white : Colors.darkBlack}
        size={25}
      />
    );
  } else if (title === "Mehr") {
    return (
      <Icon
        name="format-list-bulleted"
        color={focused ? Colors.white : Colors.darkBlack}
        size={25}
      />
    );
  } else if (title === "Favoriten") {
    return (
      <Icon
        name="star"
        color={focused ? Colors.white : Colors.darkBlack}
        size={25}
      />
    );
  }
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Overlay>
         
        </Overlay>
      </Router>
    );
  }
}
