import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";

export default Home = ({ navigation }) => {
  const [superheroList, setHeroList] = useState([]);
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  addHero = () => {
    setHeroList((list) => [...list, { name, power, id: Math.random() }]);
  };

  return (
    <View
      style={{
        flex: 1,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Superheroes</Text>
      {/* <TextInput onChangeText={(text) => setName(text)} />
      <TextInput onChangeText={(text) => setPower(text)} /> */}
      <TextInput
        style={styles.search}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Enter Your Age"
        color="black"
        hint="power"
        placeholderTextColor="#BFBFBF"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.search}
        hint="Name"
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Enter Your Age"
        color="black"
        placeholderTextColor="#BFBFBF"
        onChangeText={(text) => setPower(text)}
      />
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Add"
          onPress={(text) => addHero(text)}
          marginRight={12}
        />
        <Button
          title="View List"
          //   onPress={() =>
          //     navigation.navigate("List", {
          //       list: superheroList,
          //     })
          //   }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    width: "100%",
    borderBottomColor: "#BFBFBF",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    textDecorationLine: "underline",
    marginTop: 10,
    marginBottom: 10,
  },
  // view: {
  //   justifyContent: 'flex-end',
  //   margin: 0,
  // },
});
