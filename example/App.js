import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import { Provider } from "react-redux";
// import store from "./store/Store";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

 
import BookDetailpage from "./src/homepage/book-now/BookDetailpage";
import ViewMore from "./src/homepage/book-now/ViewMore";
import Booked from "./src/homepage/book-now/Booked";
// import AddAddress from "./src/homepage/book-now/AddAddress";
const Stack = createStackNavigator();

const MyStack = ({ navigation }) => {
  //where is Delivery screen ?

  //  const onPressItem  {

  //     this.props.navigation.navigate('Tabitem')
  //     }

  // onPress = {()=> navigation.navigate('Tabitem')}
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen
            name="BookDetailpage"
            component={BookDetailpage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewMore"
            component={ViewMore}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Booked"
            component={Booked}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MyStack;
