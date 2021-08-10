import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { List } from "react-native-paper";
const ViewMore = ({ navigation }) => {
  // function CancelOrder({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", padding: 10, marginTop: 30 }}
    >
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
            Thyrocare is India's first fully automated diagnostic laboratory
            with a focus on providing quality care at affordable costs
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#536FC1",
                fontSize: 30,
                paddingRight: 20,
              }}
            >
              {"\u2022"}
            </Text>
            <Text style={styles.textcontainer}>
              Centralized laboratory processing 60,000 samples daily.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#536FC1",
                fontSize: 30,
                paddingRight: 20,
              }}
            >
              {"\u2022"}
            </Text>
            <Text style={styles.textcontainer}>
              State of the art diagnostic infrastructure for accuracy &
              precision.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#536FC1",
                fontSize: 30,
                paddingRight: 20,
              }}
            >
              {"\u2022"}
            </Text>
            <Text style={styles.textcontainer}>
              ISO 9001:2008 and CAP (College of American Pathologists) cartified
            </Text>
          </View>
          <View>
            <List.Section style={{ backgroundColor: "white" }}>
              <List.Accordion
                style={{ backgroundColor: "white" }}
                title="Test included"
              >
                <View style={{ padding: 30 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Image
                        source={require("../../../assets/images/6465150.png")}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text style={{ textAlign: "center" }}>Test</Text>
                    </View>
                    <View>
                      <Image
                        source={require("../../../assets/images/6299026.png")}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text style={{ textAlign: "center" }}>Test</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Image
                        source={require("../../../assets/images/6465150.png")}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text style={{ textAlign: "center" }}>Test</Text>
                    </View>
                    <View>
                      <Image
                        source={require("../../../assets/images/6299026.png")}
                        style={{ width: 100, height: 100 }}
                      />
                      <Text style={{ textAlign: "center" }}>Test</Text>
                    </View>
                  </View>
                </View>
              </List.Accordion>

              {/* </List.Accordion> */}
            </List.Section>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Process</Text>

            <View style={{}}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#536FC1",
                    fontSize: 30,
                    paddingRight: 20,
                  }}
                >
                  {"\u2022"}
                </Text>
                <Text style={styles.textcontainer}>
                  Press 'Book Package' below to pay for the package
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#536FC1",
                    fontSize: 30,
                    paddingRight: 20,
                  }}
                >
                  {"\u2022"}
                </Text>
                <Text style={styles.textcontainer}>
                  Once the order is confirmed, Thyrocare will allocate a
                  certified lab technician 12-24 hours before your scheduled
                  slot
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#536FC1",
                    fontSize: 30,
                    paddingRight: 20,
                  }}
                >
                  {"\u2022"}
                </Text>
                <Text style={styles.textcontainer}>
                  Samples will be collected at your house by Thyrocare lab
                  technician during the scheduled slot
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flex: 1,
          top: 0,
          right: 10,
          left: 0,
          // padding :10,
          position: "absolute",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              color: "black",
              padding: 20,
              textAlign: "right",
            }}
            onPress={() => navigation.goBack()}
          >
            X
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ViewMore;

const styles = StyleSheet.create({
  textcontainer: {
    width: 320,
  },
  scroll: {
    position: "absolute",
    top: 40,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: "white",
    color: "white",
  },
});
