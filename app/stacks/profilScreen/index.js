import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import React from "react";
import { Avatar, Icon, List, ListItem, Button } from "react-native-elements";
import Colors from "../../assets/style/color";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "John Doe",
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.lightBlack /* navigationOptions.headerTintColor */
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = [
      {
        title: "John Doe",
        subtitle: "Name",
        leftIcon: "person",
        rightIcon: "more-horiz"
      },
      {
        title: "01.01.1970",
        subtitle: "Geburtstag",
        leftIcon: "today",
        rightIcon: "more-horiz"
      },
      {
        title: "+49 156-123-4567",
        subtitle: "Mobile",
        leftIcon: "smartphone",
        rightIcon: "more-horiz"
      },
      {
        title: "+49 7961-4567",
        subtitle: "Arbeit",
        leftIcon: "local-phone",
        rightIcon: "more-horiz"
      },
      {
        title: "John.Doe@email.de",
        subtitle: "Email",
        leftIcon: "email",
        rightIcon: "more-horiz"
      }
    ];
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#5F627D"
        }}
      >
        <ScrollView>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Avatar
              xlarge
              title="JD"
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
              rounded
              overlayContainerStyle={{ backgroundColor: "blue" }}
              containerStyle={{ marginTop: 60, marginBottom: 30 }}
            />
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Icon name="location-on" color={Colors.main} size={16} />
              <Text style={{ fontSize: 16, color: Colors.main }}>
                Nürnberg, Deutschland
              </Text>
            </View>
          </View>
          <List>
            {list.map(item => (
              <ListItem
                underlayColor={Colors.lightBlack}
                containerStyle={{
                  backgroundColor: Colors.lightBlack,
                  borderBottomColor: Colors.lightGrey,
                  marginTop: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 1
                }}
                titleStyle={{ color: Colors.white }}
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                leftIcon={{ name: item.leftIcon }}
                rightIcon={{ name: item.rightIcon }}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
