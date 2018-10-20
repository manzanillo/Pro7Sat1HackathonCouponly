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
        title: "10€ Coupon",
        value: "10,00",
        description: "Ein Test Coupon",
        code: "123345456567678",
        logo: "https://facebook.github.io/react-native/docs/assets/favicon.png",
        backgroundColor: "yellow"
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
