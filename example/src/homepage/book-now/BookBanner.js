import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Totaltest from "./Totaltest";
export default function BookBanner() {
  //   const renderItem = ({ item, index }) => {
  //     return (
  //       <View style={{ marginRight: 20 }}>
  //         <BookTestitems test={item?.name} imageUri={item?.image} />
  //       </View>
  //     );
  //   };
  return (
    <View style={{ zIndex: 11 }}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/heart.png")}
          resizeMode="contain"
          style={{
            width: 40,
            height: 45,
            tintColor: "white",
            alignSelf: "center",
          }}
        />
        <View>
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Your Health Is Our Priority
          </Text>
          <Text style={{ color: "white", fontSize: 10, width: 200 }}>
            Know More About What Our Partners Are Doing To Keep You Safe.
          </Text>
        </View>
      </View>
      {/* Banner image  */}
      <View
        style={{
          marginTop: -65,
          zIndex: -1,
          // width: 250,
          // height: 250,

          flex: 1,

          height: 200,

          borderRadius: 20,
          width: 340,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../../../assets/images/doctor-injecting-coronavirus-vaccine-to-a-patient-concept-free-vector.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,

            borderRadius: 20,
            width: null,
            height: null,
          }}
        />
      </View>

      {/* after bannner section  */}
      <View
        style={{
          backgroundColor: "#202877",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 13,
          paddingBottom: 30,
          marginTop: -15,
          zIndex: -11,
        }}
      >
        <Text
          style={{
            color: "white",
            width: 80,
            fontSize: 9,
            alignSelf: "center",
          }}
        >
          Diabetes Screening
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            borderWidth: 2,
            height: 50,
            marginTop: 10,
            // width: 20,
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            borderRightColor: "transparent",
            borderLeftColor: "#BFBFBF",
            alignSelf: "center",
          }}
        ></Text>
        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Rs</Text>
            <Text style={{ color: "#A1E1F3", fontWeight: "bold" }}> 499</Text>
          </View>
          <Text style={{ color: "white", fontSize: 9 }}>Onwards</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Rs</Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textDecorationLine: "line-through",
              }}
            >
              799
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 9 }}>Earlier</Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={{ color: "white", fontSize: 9, paddingLeft: 10 }}>
            This Package Covers
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/images/black-circle.png")}
              resizeMode="contain"
              style={{
                width: 7,
                height: 7,
                alignSelf: "center",
                // marginTop: 5,
                tintColor: "#A1E1F3",
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 9,
                fontWeight: "bold",
                paddingLeft: 5,
              }}
            >
              Risk Assessment : Diabetes
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: -20,
          zIndex: -11,
        }}
      >
        {/* total test  */}
        <Totaltest
          total="2"
          text="Included"
          imageUri={require("../../../assets/images/kidney.png")}
        />
        <Totaltest
          total="300"
          text="Booked in last 7 days"
          imageUri={require("../../../assets/images/happy--v1.png")}
        />
      </View>
      {/* why you should book at EasyLab ?  */}
      <View style={{ padding: 15, marginTop: 10 }}>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Why You Should Book At </Text>
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            {" "}
            EasyLab ?{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.book}>
            <Image
              source={require("../../../assets/images/home.png")}
              style={styles.logoimage}
            />
            <Text style={styles.text}>Sample Pickup At Home</Text>
          </View>
          <View style={styles.book}>
            <Image
              source={require("../../../assets/images/document--v1.png")}
              style={styles.logoimage}
            />
            <Text style={styles.text}>Online Reports In 24-72 hrs</Text>
          </View>
          <View style={styles.book}>
            <Image
              source={require("../../../assets/images/2131.1-doctor-icon-iconbunny.jpg")}
              style={styles.logoimage}
            />
            <Text style={styles.text}> Report Analysis With Top Doctors</Text>
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
    marginTop: -170,
    justifyContent: "center",

    borderRadius: 60,
    padding: 8,
  },
  text: {
    fontSize: 11,
    fontWeight: "bold",
    paddingTop: 10,
  },
  book: {
    width: 100,
    alignItems: "center",
  },
  logoimage: {
    width: 40,
    height: 40,
  },
  docimage: {
    width: 30,
    height: 30,
  },
});
