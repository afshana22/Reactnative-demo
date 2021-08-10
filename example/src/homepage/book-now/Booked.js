import * as React from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";

const Booked = ({ navigation }) => {
  // function CancelOrder({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 180,
          }}
        >
          <Text style={{ fontSize: 17 }}>Test Booked</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                margin: 10,
                backgroundColor: "#202877",
                color: "white",
                padding: 10,
              }}
              onPress={() => navigation.navigate("BookDetailpage")}
            >
              OK
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          top: 30,
          right: 30,
          left: 0,
          // padding :10,
          position: "absolute",
        }}
      ></View>
    </View>
  );
};
export default Booked;
