import React, { Component } from 'react';
import { View,Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TextInput,
  Dimensions,TouchableOpacity  } from 'react-native';

  import { Avatar } from "react-native-paper";
const deviceHeight = Dimensions.get("window").height;


import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class ExampleTwo extends Component {
  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

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
    const progressStepsStyle = {
      activeStepIconBorderColor: '#686868',
      activeLabelColor: '#686868',
      activeStepNumColor: 'white',
      activeStepIconColor: '#686868',
      completedStepIconColor: '#686868',
      completedProgressBarColor: '#686868',
      completedCheckColor: '#4bb543'
    };

    const buttonTextStyle = {
      color: '#686868',
      fontWeight: 'bold'
    };

    return (
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
              source={require("./assets/snack-icon.png")}
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
            label="First"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >

          
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 1!</Text>
            </View>
          </ProgressStep>


          <ProgressStep
            label="Second"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
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
                source={require("./assets/snack-icon.png")}
              />

              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                Hi Andrew
              </Text>
            </View>

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
          <TouchableOpacity>

           <Text
            style={{ fontSize: 30, fontWeight: "bold", color: "#536FC1" }}
            >
            +
            </Text>


          </TouchableOpacity>


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
              // borderRadius={10}
              //   onPress={() => sheetRef.current.snapTo()}

              //onPress={onShowPopup}
            />

            {/*end this suffer!*/}
          </View>

             </View>

            </View>
          </ProgressStep>
          <ProgressStep
            label="Third"
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
    );
  }
}

export default ExampleTwo;
