import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";
import { Card, ListItem, Button, Icon, List } from "react-native-elements";
import CardComponent from "../../assets/card";
import { material, systemWeights } from "react-native-typography";

const Images = [
  require("../../src/building.png"),
  require("../../src/hospital.png"),
  require("../../src/pint.png"),
  require("../../src/store.png")
];

const history = [
  {
    logo: 1,
    title: "Comfort Hotel am Medienpark",
    category: "Restaurant Coupon",
    value: "10€"
  },
  {
    logo: 3,
    title: "Freimann E.V. München",
    category: "Bar Coupon",
    value: "3%"
  },
  {
    logo: 4,
    title: "Hofstatt",
    category: "Shopping Coupon",
    value: "10%"
  },
  {
    logo: 2,
    title: "Guten Tag Apotheke",
    category: "Pharmacy Coupon",
    value: "3€"
  }
];

class couponScreen extends Component {
  constructor(props) {
    super(props);
    console.log("hier bin ich");
    console.log(props);
    this.state = {};
  }
  render() {
    const coupon = [
      {
        value: [{ type: "percent", value: -5, signe: "%" }],
        gradient: ["#0A122A", "#610B4B"],
        _id: "5bcba21dba372c108b8adf39",
        title: "Tomaten Discount",
        company: "Aldi Süd",
        description: "Heute die Toamten für weniger geld als morgen",
        code: "69898425848591512447911349569250504064472511731377",
        logo: "http://localhost/logo3.png",
        __v: 0,
        ttl: 0
      }
    ];
    let Cards;
    if (this.props.coupon) {
      Cards = <CardComponent coupon={this.props.coupon} />;
    } else {
      Cards = <Text />;
    }

    return (
      <ScrollView
        style={{
          backgroundColor: "#5F627D",
          flexDirection: "column",
          flex: 1
        }}
      >
        {Cards}
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
          <List style={{ marginTop: 20 }}>
            {history.map(history => (
              <ListItem
                underlayColor={Colors.lightBlack}
                containerStyle={{
                  backgroundColor: Colors.bg,
                  marginTop: 0,
                  borderTopWidth: 0,
                  height: 70,
                  borderBottomWidth: 0,
                  paddingLeft: 7,
                  paddingTop: 10
                }}
                titleStyle={{ color: Colors.white }}
                key={history.title}
                title={history.title}
                image
                subtitle={history.category}
                rightTitle={history.value}
                hideChevron
                avatar={
                  <Image
                    style={{ width: 35, height: 35, paddingRight: 5 }}
                    source={Images[history.logo - 1]}
                  />
                }
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
