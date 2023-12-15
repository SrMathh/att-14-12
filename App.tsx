import {StatusBar} from 'expo-status-bar';
import React from "react";
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from "@react-navigation/native";
import Home from './src/screens/Home';
import Cardapio from './src/screens/Cardapio';
import Login from './src/screens/Login';

type StackNavigatorParamsList = {
  Home: undefined;
  Cardapio: undefined;
  Login: undefined;
}

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login'component={Login} options={{
          title: "Login",
          headerTitleAlign: "center",
        }}/>
        <Stack.Screen name='Home'component={Home}/>
        <Stack.Screen name='Cardapio'component={Cardapio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
