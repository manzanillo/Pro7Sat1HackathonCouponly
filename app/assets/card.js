import React, { Component } from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Barcode from "react-native-barcode-builder";
import { material, systemWeights } from "react-native-typography";
import CountDown from "react-native-countdown-component";
import CardFlip from "react-native-card-flip";
import LinearGradient from "react-native-linear-gradient";

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
      <View>
        <Card
          containerStyle={{
            padding: 0,
            borderWidth: 0
          }}
        >
          {this.props.coupon.map((c, i) => {
            const time = (new Date(c.ttl) - new Date()) / 1000;
            console.log(time);
            return (
              <View
                key={i}
                style={{
                  backgroundColor: "#5F627D"
                }}
              >
                <CardFlip
                  style={styles.cardContainer}
                  ref={card => (this.card = card)}
                  flipDirection={"x"}
                >
                  <TouchableOpacity
                    style={[styles.card, { backgroundColor: "transparent" }]}
                    onPress={() => this.card.flip()}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#008CA2", "#61B238"]}
                      style={styles.linearGradient}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: 10
                        }}
                      >
                        <Text
                          style={[
                            material.headline,
                            { width: 200, color: "whitesmoke" }
                          ]}
                        >
                          {c.title}
                        </Text>
                        <Image
                          style={{
                            width: 80,
                            height: 50,
                            resizeMode: "contain"
                          }}
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
                          until={time}
                          onFinish={() => alert("finished")}
                          size={20}
                          textStyle={{ color: "black" }} //default black
                          digitBgColor={"transparent"}
                          digitTxtColor={"whitesmoke"}
                          timeTxtColor={"whitesmoke"}
                          timeToShow={["H", "M", "S"]}
                          size={22}
                        />
                        <Text
                          style={[material.headline, { color: "whitesmoke" }]}
                        >
                          {c.value[0].value} {c.value[0].signe}
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => this.card.flip()}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#008CA2", "#61B238"]}
                      style={styles.linearGradient}
                    >
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "transparent",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Barcode
                          value={c.code}
                          format="CODE128"
                          width={1.5}
                          height={60}
                          background={"transparent"}
                        />
                        <Text>{c.code}</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </CardFlip>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  cardContainer: {
    width: 330,
    height: 180,
    borderColor: "red",
    borderWidth: 0,
    borderColor: "#d6d7da",
    borderBottomColor: "transparent"
  },
  card: {
    width: 330,
    height: 180,
    borderColor: "red",
    borderBottomColor: "transparent"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});
