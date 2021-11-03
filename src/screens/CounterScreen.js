import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //state === {count:number}
  //action === {type: inc||dec,payload:1,-1} we dont need payload because its 1
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload }; //{count: state.count + action.payload} works also

    case "decrease":
      return { ...state, count: state.count - action.payload }; //we cant have payload -1,

    default:
      return state;
  }
};

const CounterScreen = () => {
  //let counter= 0; bad!!!
  // const [counter, setCounter] = useState(0); //(default value),
  //js array destructoring: useState is array of 2 values, then counter and setCounter is destructoring
  //if we want to modify variable, we need to set counter to a number, counter is readonly so we cant do counter++

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.view}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
        }}
      />

      <Text style={styles.counter}>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 30,
    padding: 20,
  },
  view: {
    padding: 50,
  },
});

export default CounterScreen;
