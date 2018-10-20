import { Platform, StyleSheet } from "react-native";
import Colors from "./color";
import {
  webWeights,
  material,
  systemWeights,
  iOSUIKit,
  robotoWeights
} from "react-native-typography";

export default StyleSheet.create({
  coffeeBtn: {
    ...material.display1,
    ...systemWeights.semibold,
    color: Colors.white,
    backgroundColor: Colors.darkBlack,
    padding: 10,
    opacity: 0.9
  },
  favoritenBtn: {
    ...material.headline,
    ...systemWeights.light,
    color: Colors.white
  },
  monitoringHead: {
    ...material.headline,
    ...systemWeights.light,
    color: Colors.white
  },
  monitoringKPI: {
    ...material.display2,
    ...systemWeights.semibold,
    color: Colors.white
  },
  monitoringSpan: {
    ...material.subheading,
    ...systemWeights.light,
    color: Colors.white
  }
});
