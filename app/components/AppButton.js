import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AppButton = ({
  title = "Click here",
  onPress,
  style,
  titleStyle,
  titleColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      <Text style={[styles.title, titleStyle, { color: titleColor }]}>
        {title}
      </Text>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      />
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
