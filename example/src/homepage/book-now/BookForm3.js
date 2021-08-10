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
// import BookForm1 from "./BookForm1";
// import { Agenda } from "react-native-calendars";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HorizontalDatePicker from "@logisticinfotech/react-native-horizontal-date-picker";
const deviceHeight = Dimensions.get("window").height;

import CalendarStrip from "react-native-calendar-strip";
// export default function BookForm2({ imageUri, test, plans }) {
export default class BookForm3 extends React.Component {
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
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }
    //   const renderContent = () => <BookForm2 />;
    //   const sheetRef = React.useRef();
    //   fall = new Animated.Value(1);
    let { show } = this.state;

    onDateSelected = (date) => {
      console.log("Selected Date:==>", date);
    };

    // onTimeSelected = (time) => {
    //   console.log("Selected Time:==>", time);
    // };

    // onDateTimeSelected = (datetime) => {
    //   console.log("Selected Time:==>", datetim);
    // };

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
              fontWeight: "bold",
              color: "#536FC1",
              textAlign: "center",
              paddingTop: 10,
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
            <Text style={styles.number}>2</Text>
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
              3
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              When Do You Want To Book ?
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 11,
                color: "#536FC1",
              }}
            >
              Note: Your Test Requires 10 hours fasting
            </Text>
          </View>

          {/* time picker  */}
          {/* <HorizontalDatePicker
            pickerType={"datetime"}
            minDate={new Date()}
            defaultSelected={new Date()}
            dayFormat={"DD"}
            monthFormat={"MMM"}
            yearFormat={"YY"}
            timeFormat={"HH:mm a"}
            timeStep={120}
            returnDateFormat={"Do MMMM YY"}
            returnTimeFormat={"hh:mm a"}
            returnDateTimeFormat={"DD-MM-YYYY HH:mm"}
            onDateSelected={this.onDateSelected}
            onTimeSelected={this.onTimeSelected}
            onDateTimeSelected={this.onDateTimeSelected}
          /> */}
          <CalendarStrip minDate={new Date()} defaultSelected={new Date()} />
          {/* <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={"2017-05-16"}
            renderItem={renderItem}
          /> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>08:30 AM - 09:30 AM</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>09:30 AM - 10:30 AM</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>10:30 AM - 11:30 AM</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>9:00 AM - 10:00 AM</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>10:00 AM - 11:00 AM</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, padding: 5 }}>
              <Text style={styles.timeUnSelected}>11:00 AM - 12:00 pM</Text>
            </View>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <Button
              title="FINISH"
              color="#536FC1"
              onPress={() => navigation.navigate("Booked")}
              // borderRadius={10}

              // onPress={() => sheetRef.current.snapTo()}
            />
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

  timeSelected: {
    fontSize: 15,
    color: "white",
    borderRadius: 10,

    padding: 8,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#202877",
  },
  timeUnSelected: {
    fontSize: 15,
    color: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#202877",
    padding: 8,
    alignSelf: "center",
    textAlign: "center",
    // backgroundColor:'#202877'
  },
});
