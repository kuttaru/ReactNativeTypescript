import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "./screens/Home";
import Otp from "./screens/Otp";
import SelectPurpose from "./screens/SelectPurpose";
import YourName from "./screens/YourName";


const Stack = createNativeStackNavigator();

export default function App() {


  const [loaded] = useFonts({
    RecoletaLight: require("./assets/fonts/RecoletaAlt-Light.ttf"),
    RecoletaRegular: require("./assets/fonts/Recoleta-Regular.ttf"),
    RecoletaMedium: require("./assets/fonts/Recoleta-Medium.ttf"),
    RecoletaBold: require("./assets/fonts/Recoleta-Bold.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={
          {
            headerTitle:"Otp ",
            headerTitleAlign:"center",
            headerTransparent: true,
          }
        }
        />


        <Stack.Screen
        name="SelectPurpose"
        component={SelectPurpose}
        options={
          {
            headerTitle:"SelectPurpose ",
            headerTitleAlign:"center",
            headerTransparent: true,
          }
        }
        />


        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
   
        <Stack.Screen
        name="YourName"
        component={YourName}
        options={
          {
            headerTitle:"Your Name",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerStyle: {
              // backgroundColor: '#fc3',
            },
            headerTitleStyle: {
              // color: '#f00'
            },
            headerRight: () => (
              <Pressable>
                <Text style={styles.whiteText}>Send OTP</Text>
              </Pressable>
            ),
          }
        }
        />

      </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  whiteText:{
    color: '#ff0000',

  },


});