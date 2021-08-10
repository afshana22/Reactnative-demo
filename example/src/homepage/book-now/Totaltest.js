import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Totaltest({ total, text, imageUri }) {
  //   const renderItem = ({ item, index }) => {
  //     return (
  //       <View style={{ marginRight: 20 }}>
  //         <BookTestitems test={item?.name} imageUri={item?.image} />
  //       </View>
  //     );
  //   };
  return (
    <View style={{ zIndex: 11 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {/* total test  */}
        <View
          style={{
            backgroundColor: "#A1E1F3",
            flexDirection: "row",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              height: 55,
              width: 55,
              paddingTop: 7,
            }}
          >
            <Image
              source={imageUri}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                // marginTop: 5,
              }}
            />
          </View>
          <View style={{ paddingLeft: 4, alignSelf: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {total}+{" "}
              </Text>
              <Text
                style={{ fontSize: 11, alignSelf: "center", paddingLeft: 1 }}
              >
                Tests
              </Text>
            </View>
            <Text style={{ fontSize: 11, width: 90 }}>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202877",
    // paddingBottom: 100,
    margin: 30,
    // padding: 20,
    // paddingRight: 50,
    flexDirection: "row",
    marginTop: -250,
    justifyContent: "center",

    borderRadius: 60,
    padding: 8,
  },
});
