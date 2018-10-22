import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
class mapScreen extends Component {
  constructor(props) {
    fetch(
      "http://18.223.252.8:3000/location/getlocations/bygeolocation?lat=48.1518075&lon=11.5701609&range=0.21"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ markers: data });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    super(props);
    this.state = {
      event: this.props.navigation.state.params.event,
      region: {
        latitude: 48.1918359,
        longitude: 11.6465513,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: [],
      starter: {
        latitude: 48.1918359,
        longitude: 11.6465513
      }
    };
  }

  onMapLayout = () => {
    setTimeout(() => {
      this.setState({ isMapReady: true });
    }, 100);
  };

  render() {
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        zoomEnabled={true}
        region={this.state.region}
        onLayout={this.onMapLayout}
      >
        {this.state.isMapReady &&
          this.state.markers.map((marker, i) => (
            <Marker
              key={i}
              coordinate={marker.markerPos}
              title={marker.title}
              description={marker.description}
            />
          ))}
        <Marker
          coordinate={this.state.starter}
          image={require("../../src/dot.png")}
        />
      </MapView>
    );
  }
}

export default mapScreen;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  }
});
