import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greet = "hey there";
  const a = [234, 34, 44, 3, 3, 3];
  const text1 = <Text>this is a const val </Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is Components screen!</Text>
      <Text>
        {greet} + {a.concat(" Mor Ofir")}
      </Text>
      {text1}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
