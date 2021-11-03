import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//reducer function outside the class (squarescreen), that we wont mix the states
const reducer = (state, changeAction) => {
  //state is (red,green,blue)
  //action is whats the change in the numbers {color:amount}, {'red':15}
  switch (changeAction.type) {
    case "change_red":
      //never do: state.red = state.red - 15;
      return state.red + changeAction.payload > 255 ||
        state.red + changeAction.payload < 0
        ? state
        : { ...state, red: state.red + changeAction.payload };

    case "change_green":
      return state.green + changeAction.payload > 255 ||
        state.green + changeAction.payload < 0
        ? state
        : { ...state, green: state.green + changeAction.payload };

    case "change_blue":
      return state.blue + changeAction.payload > 255 ||
        state.blue + changeAction.payload < 0
        ? state
        : { ...state, blue: state.blue + changeAction.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); //state is the object have all the properties (r,g,b)
  //state: (0,0,0)
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0); this for useState
  const { red, green, blue } = state; //destructering

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          //   setRed(red + COLOR_INCREMENT > 255 ? 255 : red + COLOR_INCREMENT)
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          //   setRed(red - COLOR_INCREMENT < 0 ? 0 : red - COLOR_INCREMENT)
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          // setGreen(green + COLOR_INCREMENT)
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          // setGreen(green - COLOR_INCREMENT)
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          margin: 120,

          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
