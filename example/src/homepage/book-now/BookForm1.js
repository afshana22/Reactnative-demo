import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import BookForm2 from "./BookForm2";
import AddMember from "./AddMember";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
const deviceHeight = Dimensions.get("window").height;
export default class BookForm1 extends React.Component {
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
  // onPressItem = () => {
  //   this.props.navigation.navigate("AddMember");
  // };
  render() {
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }
    //   const renderContent1 = () => <BookForm2 />;
    //   const sheetRef = React.useRef();
    //   fall = new Animated.Value(1);
    let { show } = this.state;
    // const [modalVisible, setModalVisible] = useState(false);
    const { onTouchOutside } = this.props;

    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    let popupAddMemberRef = React.createRef();
    const onShowPopupAddMember = () => {
      popupAddMemberRef.show();
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
          {/* close  */}
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
              // onPress={() => navigation.goBack()}
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
              1
            </Text>
            <Text style={styles.straightline}> </Text>
            <Text style={styles.number}>2</Text>
            <Text style={styles.straightline}> </Text>
            <Text style={styles.number}>3</Text>
          </View>

          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              //   marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Avatar.Image
                size={60}
                source={require("../../../assets/images/22-220721_circled-user-male-type-user-colorful-icon-png.png")}
              />
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                Hi Andrew
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
                  // onPress={() => this.onPressItem()}
                  onPress={onShowPopupAddMember}
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
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                size={50}
                source={require("../../../assets/images/22-220721_circled-user-male-type-user-colorful-icon-png.png")}
              />
              <Text style={styles.member}>Brother</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                size={50}
                source={require("../../../assets/images/22-220721_circled-user-male-type-user-colorful-icon-png.png")}
              />
              <Text style={styles.member}>Father</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                size={50}
                source={require("../../../assets/images/images15.png")}
              />
              <Text style={styles.member}>Mother</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Avatar.Image
                size={50}
                source={require("../../../assets/images/images15.png")}
              />
              <Text style={styles.member}>Wife</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <TextInput
              style={styles.search}
              // onChangeText={onChangeText}
              // value={text}
              placeholder="Please Enter Your Brother's Name"
              color="black"
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.search}
              // onChangeText={onChangeText}
              // value={text}
              placeholder="Enter Your Age"
              color="black"
              placeholderTextColor="black"
            />
          </View> */}
          <View style={{ marginTop: 20 }}>
            <Button
              title="NEXT"
              color="#536FC1"
              // borderRadius={10}
              //   onPress={() => sheetRef.current.snapTo()}

              onPress={onShowPopup}
            />
          </View>
          <BookForm2
            navigation={this.props.navigation}
            ref={(target) => (popupRef = target)}
          />
          <AddMember
            navigation={this.props.navigation}
            ref={(target) => (popupAddMemberRef = target)}
          />
          {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 0]}
        initialSnap={1}
        // callbackNode={this.fall}
        enabledContentGestureInteraction={true}
        borderRadius={10}
        renderContent={renderContent1}
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
