import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Image,
  Animated
} from "react-vr";

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    console.log("componentDidMount");
    Animated.spring(this.animatedValue, {
      duration: 800,
      friction: 1,
      tension: 5,
      toValue: 150
    }).start(() => {
      console.log("Animation finished");
    });
  }

  render() {
    return (
      <View>
        <Pano source={asset("eiffel_tower.jpg")} />
        <Model
          source={{
            obj: asset("astronaut.obj"),
            mtl: asset("astronaut.mtl"),
            texture: asset("Astronaut_BaseColor.jpg")
          }}
          style={{
            transform: [
              {
                translate: [10, -10, -50]
              },
              { scale: 3 }
            ]
          }}
        />
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [
              {
                translate: [-250, 250, -500]
              },
              { scale: 0.5 },
              { translateY: this.animatedValue }
            ]
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          }}
        />
        <Text
          style={{
            backgroundColor: "#777879",
            fontSize: 15,
            fontWeight: "100",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 3.2,
            marginLeft: 5,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [60, 300, -700] }]
          }}
        >
          hello react-vr
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
