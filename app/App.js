/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Router, Scene, Tabs, Stack, Overlay } from "react-native-router-flux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import couponScreen from "./stacks/couponScreen";
import mapScreen from "./stacks/mapScreen";
import profilScreen from "./stacks/profilScreen";
import Colors from "./assets/style/color";

const TabIcon = ({ focused, title }) => {
  if (title === "Coupons") {
    return (
      <Icon
        name="ticket-percent"
        color={focused ? Colors.white : Colors.darkBlack}
        size={25}
      />
    );
  } else if (title === "Map") {
    return (
      <Icon
        name="map-legend"
        color={focused ? Colors.white : Colors.darkBlack}
        size={25}
      />
    );
  } else if (title === "Profile") {
    return (
      <Icon
        name="account"
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
          <Tabs tabBarStyle={{ backgroundColor: Colors.lightGrey }}
                navigationBarStyle={{
                         backgroundColor: Colors.lightBlack,
                         color: Colors.white
                       }}
                       inactiveTintColor={Colors.darkBlack}
                       activeTintColor={Colors.white}
                       navBarButtonColor={Colors.white}>
            <Stack key="cupon" title="Coupons" icon={TabIcon}>
              <Scene key="coupons" component={couponScreen} />
            </Stack>
            <Stack key="map" title="Map" icon={TabIcon}>
              <Scene key="Maps" component={mapScreen} />
            </Stack>
            <Stack key="profile" title="Profile" icon={TabIcon}>
              <Scene key="profiles" component={profilScreen} />
            </Stack>
          </Tabs>
        </Overlay>
      </Router>
    );
  }
}
