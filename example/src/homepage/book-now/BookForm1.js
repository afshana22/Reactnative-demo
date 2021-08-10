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
  Dimensions,TouchableOpacity
} from "react-native";
//import Animated from "react-native-reanimated";
//import BottomSheet from "reanimated-bottom-sheet";
import BookForm2 from "./BookForm2";
import AddMember from "./AddMember";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
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


  // just case u need to scrollUp automatic or manual by user

      


    onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };


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
//this should go to add form
    let popupRef = React.createRef();
    const onShowPopup = () => {
      popupRef.show();
    };
    let popupAddMemberRef = React.createRef();
    const onShowPopupAddMember = () => {
      popupAddMemberRef.show();
    };
    const { navigation } = this.props;





  const progressStepsStyle = {
      activeStepIconBorderColor: '#686868',
      activeLabelColor: '#686868',
      activeStepNumColor: 'white',
      activeStepIconColor: '#686868',
      completedStepIconColor: '#686868',
      completedProgressBarColor: '#686868',
      completedCheckColor: '#4bb543',
      topOffset:20,
      marginBottom:10,
    };

    const buttonTextStyle = {
      color: '#686868',
      fontWeight: 'bold'
    };


    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={show}
        onRequestClose={this.close}
      >
        <View style={{ backgroundColor: "white",
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
            maxHeight: deviceHeight * 0.6,}}>
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

        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            //label="First"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            removeBtnRow={true}
          >

            {/* end this suffer */}
            <View style={{
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
              //   marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}>

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
<TouchableOpacity onPress={this.onShowPopup}
          >

              <View
              style={{ alignSelf: "center", paddingTop: 10 }}
              >
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
            >
            +
            </Text>



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

           


            {/* <View style={{ marginTop: 20 }}>
            <Button
              title="NEXT"
              color="#536FC1"
              // borderRadius={10}
              //   onPress={() => sheetRef.current.snapTo()}

              onPress={this.onNextStep}
            />

          </View>
          */}

        

              </View>
               </TouchableOpacity>

               {/* ill add feature when user dosent click the button tihis  view dosent came up*/}

            </View>

            <AddMember
            navigation={this.props.navigation}
            ref={(target) => (popupAddMemberRef = target)}
          />
          </ProgressStep>

          


          <ProgressStep
            //label="Second"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
          <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            //label="Third"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
         
        </ProgressSteps>
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
