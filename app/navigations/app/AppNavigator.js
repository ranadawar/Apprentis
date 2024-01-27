import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/candidate/app/HomeScreen";
import Hub from "../../screens/candidate/app/Hub";
import Explore from "../../screens/candidate/app/Explore";
import Manage from "../../screens/candidate/app/Manage";
import Profile from "../../screens/candidate/app/Profile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hub" component={Hub} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Manage" component={Manage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
