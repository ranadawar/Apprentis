import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AppStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default AppStackNavigator;

const styles = StyleSheet.create({});
