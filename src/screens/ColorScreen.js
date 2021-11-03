import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add A color: "
        onPress={() => {
          setColors([...colors, randomRgb()]); //get all the before colors and add one
        }}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: randomRgb(),
          borderRadius: 50,
        }}
      />
      <FlatList
        keyExtractor={(item) => item} //key must be unique
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
                borderRadius: 50,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256); //0-255
  const green = Math.floor(Math.random() * 256); //0-255
  const blue = Math.floor(Math.random() * 256); //0-255

  return `rgb(${red}, ${green}, ${blue})`; //the spaces matters
};
const styles = StyleSheet.create({});

export default ColorScreen;
