import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails"; //use this child into the parent

const ImageScreen = () => {
  //pass a props by our own
  return (
    <View>
      <Text style={styles.main}>Image Screen</Text>
      <ImageDetails
        title="Forrest"
        source={require("../../assets/forest.jpg")}
        score={9.54}
      />
      <ImageDetails
        title="Beach"
        source={require("../../assets/beach.jpg")}
        score={8.14}
      />
      <ImageDetails
        title="Mountain"
        source={require("../../assets/mountain.jpg")}
        score={7.54}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default ImageScreen;
