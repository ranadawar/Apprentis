import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/auth/WelcomeScreen";
import LoginScreen from "../../screens/auth/LoginScreen";
import SignUpScreenOne from "../../screens/auth/SignUpScreenOne";
import SignUpScreenTwo from "../../screens/auth/SignUpScreenTwo";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterOne" component={SignUpScreenOne} />
      <Stack.Screen name="RegisterTwo" component={SignUpScreenTwo} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
