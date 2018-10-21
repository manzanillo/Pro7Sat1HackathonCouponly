import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.navigation.state.params.event,
      region: {
        latitude: 48.1849552,
        longitude: 11.6155324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: [
        {
          markerPos: {
            latitude: 48.1849552,
            longitude: 11.6155324
          },
          title: "Comfort Hotel am Medienpark"
        }
      ]
    };
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  };

  render() {
    return (
      <MapView
        onPress={e => console.log(e.nativeEvent)}
        style={styles.map}
        provider="google"
        mapType="standard"
        showsScale
        showsCompass
        showsPointsOfInterest
        showsBuildings
        showUserLocation
        followUserLocation
        loadingEnabled
        showsMyLocationButton
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
