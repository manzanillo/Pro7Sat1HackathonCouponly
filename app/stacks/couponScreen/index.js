import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import CardComponent from "../../assets/card";

class couponScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const coupon = [
      {
        title: "Rabatt für den nächsten Einkauf",
        value: "10,00€",
        description: "Ein Test Coupon",
        code: "123345456567678",
        logo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
        backgroundColor: "yellow",
        time: "2018-10-20T23:00:16.347Z"
      }
    ];
    return (
      <ScrollView style={{ backgroundColor: "#5F627D", flex: 1 }}>
        <CardComponent coupon={coupon} />
      </ScrollView>
    );
  }
}

export default couponScreen;
