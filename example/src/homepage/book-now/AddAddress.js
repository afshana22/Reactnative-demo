import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// const AddMember = ({ navigation }) => {
export default class AddAddress extends React.Component {
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

  render() {
    // function CancelOrder({ navigation }) {
    // const [checked, setChecked] = React.useState("first");
    // const [value, setValue] = React.useState("first");

    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    let { show } = this.state;
    const { navigation } = this.props;

    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={show}
        onRequestClose={this.close}
      >
        <View
          style={{
            flex: 1,
            top: 0,
            right: 0,
            left: 0,
            // padding :10,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 1,
            shadowRadius: 16.0,

            elevation: 2,
            zIndex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={26}
              onPress={this.close}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 20,
            marginTop: 80,
          }}
        >
          <ScrollView>
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                // justifyContent: "center",
                // marginTop: 180,
              }}
            >
              <Text>Select Location</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.search}
                  placeholder="Location"
                  autoFocus={true}
                />
                <Image
                  source={require("../../../assets/images/black-circle.png")}
                  resizeMode="contain"
                  style={{
                    width: 10,
                    height: 10,
                    alignSelf: "center",
                    tintColor: "#4DB2F8",
                  }}
                />
              </View>

              <Text>House/Flat No/Office</Text>
              <TextInput
                style={styles.search}
                // onChangeText={onChangeText}
                // value={text}

                color="black"
              />
              <Text style={{ marginTop: 10, marginBottom: 20 }}>Save As</Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                {/* <Button
                    color="#536FC1"
                    icon="home"
                    mode="text"
                    style={{ borderColor: "#536FC1", borderWidth: 1 }}
                  >
                    Home
                  </Button>
                  <Button
                    color="#536FC1"
                    icon="chair-rolling"
                    mode="text"
                    onPress={() => console.log("Pressed")}
                    style={{ borderColor: "#536FC1", borderWidth: 1 }}
                  >
                    Work
                  </Button>
                  <Button
                    color="#536FC1"
                    icon="map-marker"
                    mode="text"
                    onPress={() => console.log("Pressed")}
                    style={{ borderColor: "#536FC1", borderWidth: 1 }}
                  >
                    Other
                   </Button> */}
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="home"
                    size={26}
                    color="#536FC1"
                  />
                  <Text style={{ color: "#536FC1", alignSelf: "center" }}>
                    Home
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="chair-rolling"
                    size={26}
                    color="#536FC1"
                  />
                  <Text style={{ color: "#536FC1", alignSelf: "center" }}>
                    Work
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={26}
                    color="#536FC1"
                  />
                  <Text style={{ color: "#536FC1", alignSelf: "center" }}>
                    Other
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  backgroundColor: "#536FC1",
                  textAlign: "center",
                  color: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 20,
                }}
                onPress={this.close}
              >
                Add Address
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

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
  textInputContainer: {
    flexDirection: "row",

    marginBottom: 20,
    // width: "100%",
  },
  icon: {
    margin: 10,
    paddingLeft: 5,
    marginRight: 40,
  },
});
