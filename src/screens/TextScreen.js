import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter password: </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
        // value="hi there" //this is default value
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 ? (
        <Text>Password must be longer than 5 charaters</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 18,
  },
  text: { fontSize: 30 },
});
export default TextScreen;
