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
    this.state = { location: "eiffel_tower" };
  }

  getPhoto = () => {
    return `${this.state.location}.jpg`;
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
          height: 1.3,
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
          {this.getButton("Paris", () =>
            this.setState({ location: "eiffel_tower" }))}
          {this.getButton("New York", () =>
            this.setState({ location: "new_york" }))}
          {this.getButton("São Paulo", () =>
            this.setState({ location: "sao_paulo" }))}
          {this.getButton("London Eye", () =>
            this.setState({ location: "london_eye" }))}
        </View>
        <Pano source={asset(this.getPhoto())} />
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
