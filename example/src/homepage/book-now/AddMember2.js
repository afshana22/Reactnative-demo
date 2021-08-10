import * as React from "react";
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
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Modal from "react-native-modal";
// const AddMember = ({ navigation }) => {
export default class AddMember extends React.Component {
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
    // const show = () => {
    //   this.setState({ show: true });
    // };
    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    let { show } = this.state;
    const { navigation } = this.props;

    // const [superheroList, setHeroList] = React.useState([]);
    // const [name, setName] = useState("");
    // const [power, setPower] = useState("");

    return (
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={show}
        onRequestClose={this.close}
      >
        {/* <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        onSwipeComplete={this.close}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.view}> */}

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

              flexDirection: "row",
              //   justifyContent: "space-between",
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={26}
              onPress={this.close}
            />
            <Text style={{ fontSize: 20, fontWeight: "800", paddingLeft: 20 }}>
              Add Profile
            </Text>
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
              <TextInput
                style={styles.search}
                // onChangeText={onChangeText}
                // value={text}
                placeholder="Please Enter Name"
                color="black"
                placeholderTextColor="#BFBFBF"
              />
              <TextInput
                style={styles.search}
                // onChangeText={onChangeText}
                // value={text}
                placeholder="Enter Your Age"
                color="black"
                placeholderTextColor="#BFBFBF"
              />
              <TextInput
                style={styles.search}
                // onChangeText={onChangeText}
                // value={text}
                placeholder="Please Enter Relation"
                color="black"
                placeholderTextColor="#BFBFBF"
              />
              <Text
                style={{ marginTop: 10, marginBottom: 20, textAlign: "center" }}
              >
                Add Gender
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={{ flexDirection: "row" }}>
                  <RadioButton
                    value="male"
                    // status={checked === "male" ? "checked" : "unchecked"}
                    // onPress={() => setChecked("male")}
                  />
                  <Text style={{ alignSelf: "center" }}>Male</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <RadioButton
                    value="female"
                    // status={checked === "female" ? "checked" : "unchecked"}
                    // onPress={() => setChecked("female")}
                  />
                  <Text style={{ alignSelf: "center" }}>Female</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <RadioButton
                    value="other"
                    // status={checked === "other" ? "checked" : "unchecked"}
                    // onPress={() => setChecked("other")}
                  />
                  <Text style={{ alignSelf: "center" }}>Other</Text>
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

                // onPress={() => navigation.navigate('List', {
                //   list: superheroList,
                // })}
              >
                Add Profile
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
  // view: {
  //   justifyContent: 'flex-end',
  //   margin: 0,
  // },
});
