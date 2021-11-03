import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 33 },
    { name: "Friend #3", age: 54 },
    { name: "Friend #4", age: 10 },
    { name: "Friend #5", age: 11 },
    { name: "Friend #6", age: 87 },
    { name: "Friend #7", age: 76 },
    { name: "Friend #8", age: 43 },
    { name: "Friend #9", age: 32 },
  ];

  //   return <Text style={styles}>List Screen!</Text>;
  // we can give a key to array {name: "friend #1",key:'1'} //key must be a string
  //OTHER METHOD in runtime with keyextractor
  return (
    <FlatList
      horizontal={false}
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // console.log(item);
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
    fontSize: 25,
  },
});

export default ListScreen;
