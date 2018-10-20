import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon, List } from "react-native-elements";
import CardComponent from "../../assets/card";
import { material, systemWeights } from "react-native-typography";

const history = [
  {
    logo: "1",
    title: "Comfort Hotel am Medienpark",
    category: "Restaurant Coupon",
    value: "10€",
    date: "17.10.2018"
  },
  {
    logo: "2",
    title: "Freimann E.V. München",
    category: "Bar Coupon"
  },
  {
    logo: "sdfs",
    title: "Hofstatt",
    category: "Shopping Coupon"
  },
  {
    logo: "sdfs",
    title: "Guten Tag Apotheke",
    category: "Pharmacy Coupon"
  }
];

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
      <ScrollView
        style={{
          backgroundColor: "#5F627D",
          flexDirection: "column",
          flex: 1
        }}
      >
        <CardComponent coupon={coupon} />
        <ScrollView>
          <Text
            style={{
              ...material.display1,
              ...systemWeights.light,
              color: Colors.white,
              marginTop: 20,
              marginLeft: 15
            }}
          >
            History
          </Text>
          <List stlye={{ marginTop: 20 }}>
            {history.map(history => (
              <ListItem
                underlayColor={Colors.lightBlack}
                containerStyle={{
                  backgroundColor: Colors.bg,
                  marginTop: 0,
                  borderTopWidth: 0,
                  height: 70,
                  borderBottomWidth: 0
                }}
                titleStyle={{ color: Colors.white }}
                key={history.title}
                title={history.title}
                subtitle={history.category}
                rightTitle={history.value}
                rightSubtitle="tes"
              />
            ))}
          </List>
        </ScrollView>
      </ScrollView>
    );
  }
}

export default couponScreen;
// <Image source={require("/react-native/img/favicon.png")} />;
