import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Text = ({ children, style, ...otherProps }) => {
  return (
    <Text style={({ color: COLORS.white }, style)} {...otherProps}>
      {children}
    </Text>
  );
};

export default Text;

const styles = StyleSheet.create({});
