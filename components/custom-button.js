import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

export default function CustomButton({
  title,
  textColor,
  onPress,
  type,
  fillColor,
  borderColor,
  disabled,
  loading,
  containerStyles
}) {
  console.log(loading);
  return (
    <View style={containerStyles}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          {
            backgroundColor: fillColor,
            borderWidth: type === "outlined" ? 1 : 0,
            borderColor: type === 'outlined' ? borderColor : null,
            opacity: disabled ? .4 : 1
          },
          type === 'hover' && {...styles.hover} : null,
        ]}
      >
        <View>
          {loading ? <ActivityIndicator size="small" color="white" /> : (
            <Text style={[styles.titleText, { color: textColor }]}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15
  },
  hover: {
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 1
  }
});
