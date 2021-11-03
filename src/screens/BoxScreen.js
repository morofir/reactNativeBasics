import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>

      <View style={styles.viewStyleFlex}>
        <Text style={styles.textStyle}>Child #1</Text>
        <Text style={styles.textStyle}>Child #2</Text>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>

      <View style={styles.viewStyleFlex}>
        <Text>Horizontal</Text>

        <Text style={styles.textoneStyle}>flex-end</Text>
        <Text style={styles.texttwoStyle}>flex 2 </Text>
        <Text style={styles.textthreeStyle}>flex 1</Text>
      </View>

      <View style={styles.viewStyleFlex}>
        <Text style={styles.textAbsoluteStyle}>absolute obeys parent</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    height: 200,
  },
  viewStyleFlex: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row", //hebrew right to left
    height: 100,
    alignItems: "center", //this is the axix in the default
    justifyContent: "center", //this is the diffrent axis
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    marginVertical: 8,
  },
  textoneStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
  },
  texttwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
  },
  textthreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
  textAbsoluteStyle: {
    borderWidth: 3,
    borderColor: "green",
    position: "absolute",
  },
});
export default BoxScreen;
