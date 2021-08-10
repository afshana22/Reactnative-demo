import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  TextInput,
} from "react-native";
// import Animated from "react-native-reanimated";
// import BottomSheet from "reanimated-bottom-sheet";
import BookForm3 from "./BookForm3";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import AddAddress from "./AddAddress";
const deviceHeight = Dimensions.get("window").height;
// export default function BookForm2({ imageUri, test, plans }) {
export default class BookForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  show = () => {
    this.setState({ show: true });
  };
  close = () => {
    this.setState({ show: false });
  };
  //   onTouchOutside = () {

  //   }

  onPressItem = () => {
    this.props.navigation.navigate("AddAddress");
  };
  render() {
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }
    //   const renderContent = () => <BookForm2 />;
    //   const sheetRef = React.useRef();
    //   fall = new Animated.Value(1);
    let { show } = this.state;

    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    const onClosePopup = () => {
      popupRef.close();
    };

    let popupAddAddressRef = React.createRef();
    const onShowPopupAddAddress = () => {
      popupAddAddressRef.show();
    };
    const { navigation } = this.props;
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            backgroundColor: "white",
            // padding: 16,
            // paddingRight: 0,
            // paddingLeft: 0,
            width: "100%",
            bottom: 0,
            position: "absolute",
            // marginTop: 30,
            flex: 1,
            justifyContent: "flex-end",
            borderTopRightRadius: 80,
            borderTopLeftRadius: 80,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 1,

            shadowRadius: 16.0,

            elevation: 6,
            maxHeight: deviceHeight * 0.6,
          }}
        >
          <View
            style={{
              borderRadius: 50,
              borderColor: "black",
              borderWidth: 1,
              width: 50,
              height: 50,
              right: 40,
              top: -20,
              backgroundColor: "white",
              position: "absolute",
            }}
          >
            <Image
              source={require("../../../assets/images/images.jpg")}
              resizeMode="contain"
              style={{
                width: 50,
                borderRadius: 50,
                borderColor: "black",
                height: 50,
                alignSelf: "center",
              }}
            />
          </View>
          {/* <View
            style={{
              borderRadius: 50,
              paddingRight: 6,
              paddingTop: 7,
              width: 50,
              height: 50,
              left: 40,
              top: -20,
              backgroundColor: "#536FC1",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
                textAlign: "center",
              }}
              onPress={this.close}
            >
              {" "}
              x
            </Text>
          </View> */}
          <Text
            style={{
              color: "#536FC1",
              textAlign: "center",
              paddingTop: 10,
              fontWeight: "bold",
            }}
          >
            Booking For ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.number}>1</Text>
            <Text style={styles.straightline}> </Text>
            <Text
              style={{
                borderRadius: 50,
                backgroundColor: "#536FC1",
                // padding: 10,
                textAlign: "center",
                alignSelf: "center",
                paddingTop: 9,
                paddingRight: 2,
                height: 40,
                width: 40,
                color: "white",
                fontWeight: "bold",
              }}
            >
              2
            </Text>
            <Text style={styles.straightline}> </Text>
            <Text style={styles.number}>3</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {" "}
              Sample Pickup Address ?
            </Text>
          </View>

          <View style={{ alignSelf: "center", paddingTop: 10 }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#536FC1",
                borderRadius: 50,
                width: 50,
                height: 50,
                paddingLeft: 14.5,
                paddingTop: 4,
              }}
            >
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#536FC1" }}
                // onPress={() => navigation.navigate("AddMember")}
                onPress={onShowPopupAddAddress}
              >
                +
              </Text>
            </View>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 10,
                color: "#536FC1",
                fontWeight: "bold",
              }}
            >
              Add
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button
              title="NEXT"
              color="#536FC1"
              // onTouchOutside={onClosePopup}
              onPress={() => navigation.goBack()}
              // onPress={this.close}
              onPress={onShowPopup}
              // borderRadius={10}

              // onPress={() => sheetRef.current.snapTo()}
            />
          </View>
          <BookForm3
            ref={(target) => (popupRef = target)}
            navigation={this.props.navigation}
          />
          <AddAddress
            navigation={this.props.navigation}
            ref={(target) => (popupAddAddressRef = target)}
          />
          {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 0]}
        initialSnap={1}
        // callbackNode={this.fall}
        enabledContentGestureInteraction={true}
        borderRadius={10}
        renderContent={renderContent}
      /> */}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  number: {
    borderRadius: 50,
    backgroundColor: "#D5F3FD",
    // padding: 10,
    textAlign: "center",
    alignSelf: "center",
    paddingTop: 9,
    paddingRight: 2,
    height: 40,
    width: 40,
    color: "black",
    fontWeight: "bold",
  },
  straightline: {
    fontWeight: "bold",
    borderWidth: 2,
    height: 0,
    width: 100,
    alignSelf: "center",
    borderTopColor: "#BFBFBF",
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
  member: {
    fontWeight: "bold",
    fontSize: 12,
  },
  search: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // width: 150,
    borderBottomColor: "black",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    textDecorationLine: "underline",
  },
});
