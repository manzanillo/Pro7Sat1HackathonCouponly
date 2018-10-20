import React, { Component } from "react";

import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Barcode from "react-native-barcode-builder";
import { material } from "react-native-typography";
import CountDown from "react-native-countdown-component";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props.coupon);
    this.state = {
      coupon: props.coupon
    };
  }
  render() {
    console.log(this.state);
    const { coupon } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Card containerStyle={{ padding: 0 }}>
          {coupon.map((c, i) => {
            return (
              <View
                key={i}
                style={{ padding: 25, backgroundColor: c.backgroundColor }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 35
                  }}
                >
                  <Text style={material.display1}>{c.title}</Text>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: c.logo
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <CountDown
                    until={1000}
                    onFinish={() => alert("finished")}
                    onPress={() => alert("hello")}
                    size={20}
                    textStyle={{ color: "black" }} //default black
                    digitBgColor={c.backgroundColor}
                    timeToShow={["H", "M", "S"]}
                  />

                  <Text>{c.value}€</Text>
                </View>
                <View>
                  <Barcode
                    value={c.code}
                    format="CODE128"
                    width={1.5}
                    height={60}
                    background={c.backgroundColor}
                  />
                </View>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default CardComponent;
// <Image
//                   style={styles.image}
//                   resizeMode="cover"
//                   source={{ uri: u.avatar }}
//                 />
