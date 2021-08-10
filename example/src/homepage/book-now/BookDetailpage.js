import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BookBanner from "./BookBanner";
import BookBtn from "./BookBtn";

function home({ navigation }) {
  // const [text, onChangeText] = React.useState("Search all test here");
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/images/pin.png")}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              marginLeft: 3,
              marginRight: 3,
              tintColor: "#00CCFF",
              alignSelf: "center",
            }}
          />
          {/* <View> */}
          <Text
            style={{
              color: "white",
              alignSelf: "center",
            }}
          >
            Choose Your Location
          </Text>
          {/* <Text style={{ fontSize: 20, color: "white" }}>India</Text> */}
          {/* </View> */}
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View
          style={{
            backgroundColor: "#6073CD",
            paddingBottom: 250,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            zIndex: 11,
          }}
        >
          {/* navbar  */}
        </View>
        <BookBanner />
        <View
          style={{
            flex: 1,
            backgroundColor: "#DCF2FF",
            marginBottom: 20,
          }}
        >
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Whom Do You Want To </Text>
              <Text style={{ fontWeight: "bold", backgroundColor: "white" }}>
                {" "}
                Book{" "}
              </Text>
              <Text style={{ fontWeight: "bold" }}> With Today ?</Text>
            </View>
            <Text style={{ fontSize: 9 }}>Choose From EasyLab Partners</Text>
          </View>
          <BookBtn navigation={navigation} />
          <BookBtn navigation={navigation} />
        </View>

        {/* <FeaturedEasylab />
        <Consult />
        <HomeCare />

        <Banner />

        <BookTest />
        <LabPartners />
        <CuratedOffer /> */}
      </ScrollView>
    </View>
  );
}

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function BookPart1() {
  return (
    // <NavigationContainer>
    <MyDrawer />
    // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  nav: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-between",
    top: 30,
    height: 60,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 111,
    padding: 10,
    position: "absolute",
    backgroundColor: "#6073CD",
  },
  scroll: {
    position: "absolute",
    top: 40,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: "transparent",
    color: "transparent",
  },
  search: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: "white",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
});
