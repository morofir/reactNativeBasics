import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = (props) => {
  return (
    <View>
      <Image source={props.source} />
      <Text style={styles.imageDesc}>Show Image of {props.title}</Text>
      <Text style={styles.score}>Image score: {props.score}</Text>
    </View>
  ); //created a props, who passed a title
};

const styles = StyleSheet.create({
  imageDesc: {
    paddingBottom: 10,
    color: "black",
    fontSize: 15,
    paddingStart: 20,
  },
  score: {
    color: "red",
    fontSize: 18,
  },
});

export default ImageDetails;
