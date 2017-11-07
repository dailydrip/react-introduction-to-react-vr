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
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        duration: 800,
        toValue: 150,
        delay: 3000
      }),
      Animated.spring(this.animatedValue, {
        duration: 800,
        friction: 1,
        tension: 5,
        toValue: 250
      })
    ]).start(() => {
      console.log("Sequence of two animations finished.");
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
        <Animated.Text
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
        >
          hello react-vr
        </Animated.Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
