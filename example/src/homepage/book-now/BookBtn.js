import * as React from "react";
import {
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import BookForm1 from "./BookForm1";
// export default function BookBtn() {
export default class BookBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    // const renderContent = () => <BookForm1 />;

    // const sheetRef = React.useRef();
    // fall = new Animated.Value(1);

    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    const { navigation } = this.props;
    return (
      <>
        <View
          style={{
            flex: 1,

            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <View style={{ padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                  MAX Healthcare
                </Text>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                  <Image
                    source={require("../../../assets/images/black-circle.png")}
                    resizeMode="contain"
                    style={{
                      width: 9,
                      height: 9,
                      alignSelf: "center",

                      tintColor: "#4DB2F8",
                    }}
                  />

                  <Text
                    style={{
                      paddingRight: 10,
                      paddingLeft: 5,
                      fontWeight: "bold",
                      fontSize: 10,
                    }}
                    onPress={() => navigation.navigate("ViewMore")}
                  >
                    View more details
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        textDecorationLine: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      2 Tests
                    </Text>
                    <Text> Included</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold" }}>Rs 499</Text>
                      <Text style={{ fontSize: 8 }}>Offering</Text>
                    </View>
                    <View>
                      <Text>Rs 799</Text>
                      <Text style={{ fontSize: 8 }}>Earlier</Text>
                    </View>
                  </View>
                </View>
                {/* image  */}
                <View style={{ marginRight: -30, paddingTop: 20 }}>
                  <Image
                    source={require("../../../assets/images/images.jpg")}
                    resizeMode="contain"
                    style={{
                      width: 150,
                      height: 50,
                      alignSelf: "center",
                    }}
                  />
                  <Text
                    style={{ textAlign: "center", fontSize: 9, color: "red" }}
                  >
                    (37% Off)
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ borderRadius: 20 }}>
              {/* <Button
              title="Book Now"
              color="#202877"
              onPress={onShowPopup}
              // borderRadius={10}
              // style={{ borderRadius: 10 }}
              // onPress={() => sheetRef.current.snapTo()}
            /> */}
              <TouchableWithoutFeedback onPress={onShowPopup}>
                <Text
                  style={{
                    backgroundColor: "#202877",
                    textAlign: "center",
                    color: "white",
                    padding: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  Book Now
                </Text>
              </TouchableWithoutFeedback>
              <BookForm1
                navigation={this.props.navigation}
                ref={(target) => (popupRef = target)}
              />
            </View>
          </View>
        </View>
        {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 0]}
        initialSnap={1}
        // callbackNode={this.fall}
        enabledContentGestureInteraction={true}
        borderRadius={10}
        renderContent={renderContent}
      /> */}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // paddingBottom: 20,
    // padding: 10,
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});
