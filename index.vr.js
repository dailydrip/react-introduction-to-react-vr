import React from "react";
import { AppRegistry, asset, Pano, Text, View, Model } from "react-vr";

export default class WelcomeToVR extends React.Component {
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
              { scale: 3 },
              { rotateY: -30 }
            ]
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