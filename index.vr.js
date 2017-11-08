import React from "react";
import {
  Animated,
  AppRegistry,
  Model,
  Pano,
  Text,
  View,
  VrButton,
  asset
} from "react-vr";

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "paris" };
  }

  getPhoto = () => {
    if (this.state.location == "new york") {
      return "new_york.jpg";
    } else if (this.state.location == "paris") {
      return "eiffel_tower.jpg";
    }
  };

  getButton = (name, clickFunction) => {
    return (
      <VrButton
        onClick={() => clickFunction()}
        style={{
          backgroundColor: "red",
          borderColor: "green",
          borderWidth: 0.1,
          width: 8,
          height: 1,
          color: "black",
          margin: 20,
          transform: [{ scale: 30 }, { translate: [0, 10, -30] }]
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 0.7
          }}
        >
          {name}
        </Text>
      </VrButton>
    );
  };

  render() {
    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          {this.getButton("Paris", () => this.setState({ location: "paris" }))}
          {this.getButton("New York", () =>
            this.setState({ location: "new york" }))}
        </View>
        <Pano source={asset(this.getPhoto())} />
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
