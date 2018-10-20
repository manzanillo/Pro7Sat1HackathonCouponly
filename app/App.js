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
import NfcManager, {Ndef, ByteParser} from 'react-native-nfc-manager'

console.log(NfcManager)



function buildTextPayload(valueToWrite) {
    return Ndef.encodeMessage([
        Ndef.textRecord(valueToWrite),
    ]);
}


const TabIcon = ({ focused, title }) => {
  if (title === "Coupons") {
    return (
      <Icon
        name="ticket-percent"
        color={focused ? Colors.main : Colors.white}
        size={25}
      />
    );
  } else if (title === "Map") {
    return (
      <Icon
        name="map-legend"
        color={focused ? Colors.main : Colors.white}
        size={25}
      />
    );
  } else if (title === "Profile") {
    return (
      <Icon
        name="account"
        color={focused ? Colors.main : Colors.white}
        size={25}
      />
    );
  }
};

type Props = {};




export default class App extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {
          supported: true,
          enabled: false,
          isWriting: false,
          urlToWrite: 'https://www.google.com',
          parsedText: null,
          tag: {},
      }
  }

  componentDidMount() {
      NfcManager.isEnabled()
          .then(supported => {
              this.setState({ supported });
              if (supported) {
                  this._startNfc();
              }
          })
          .catch(err => {
              console.log(err)
              console.log("no nfc")
            }
          )
  }

  _startNfc() {
          if (Platform.OS === 'android') {
              NfcManager.getLaunchTagEvent()
                  .then(tag => {
                      console.log('launch tag', tag);
                      this._startDetection();
                      if (tag) {
                          this.setState({ tag });
                      }
                  })
                  .catch(err => {
                      console.log(err);
                  })
              NfcManager.isEnabled()
                  .then(enabled => {
                      this.setState({ enabled });
                  })
                  .catch(err => {
                      console.log(err);
                  })
              NfcManager.onStateChanged(
                  event => {
                      if (event.state === 'on') {
                          this.setState({enabled: true});
                      } else if (event.state === 'off') {
                          this.setState({enabled: false});
                      } else if (event.state === 'turning_on') {
                          // do whatever you want
                      } else if (event.state === 'turning_off') {
                          // do whatever you want
                      }
                  }
              )
                  .then(sub => {
                      this._stateChangedSubscription = sub;
                      // remember to call this._stateChangedSubscription.remove()
                      // when you don't want to listen to this anymore
                  })
                  .catch(err => {
                      console.warn(err);
                  })
          }
      }


      _onTagDiscovered = tag => {
        console.log('Tag Discovered', tag);
        this.setState({ tag });

        let text = this._parseText(tag);
        this.setState({parsedText: text});

        //send tag to server

    }

    _startDetection = () => {
        NfcManager.registerTagEvent(this._onTagDiscovered)
            .then(result => {
                console.log('registerTagEvent OK', result)
            })
            .catch(error => {
                console.warn('registerTagEvent fail', error)
            })
    }

    _stopDetection = () => {
        NfcManager.unregisterTagEvent()
            .then(result => {
                console.log('unregisterTagEvent OK', result)
            })
            .catch(error => {
                console.warn('unregisterTagEvent fail', error)
            })
    }

    _clearMessages = () => {
        this.setState({tag: null});
    }

    _goToNfcSetting = () => {
        if (Platform.OS === 'android') {
            NfcManager.goToNfcSetting()
                .then(result => {
                    console.log('goToNfcSetting OK', result)
                })
                .catch(error => {
                    console.warn('goToNfcSetting fail', error)
                })
        }
    }

    _parseText = (tag) => {
        try {
            if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
                const text = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
                console.log(text);
                return text;
            }
        } catch (e) {
            console.log(e);
        }
        return null;
    }






  render() {
    return (
      <Router>
        <Overlay>
          <Tabs
            tabBarStyle={{ backgroundColor: Colors.lightBlack }}
            navigationBarStyle={{
              backgroundColor: Colors.lightBlack,
              color: Colors.white
            }}
            inactiveTintColor={Colors.white}
            activeTintColor={Colors.main}
            navBarButtonColor={Colors.white}
          >
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
