import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginHorizontal: 12,
    marginTop: 24,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.8,
    marginTop: 70
  },
  headerText: { color: "white", fontSize: 18, fontWeight: "bold" },
  blurView: { flex: 1, borderRadius: 10, padding: 15 },
  bodyText: {
    color: "white",
    fontSize: 14,
    textAlign: "left",
    fontWeight: "400",
    marginTop: 10
  }
});

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <BlurView tint="dark" intensity={45} style={styles.blurView}>
        <Text style={styles.headerText}>{"ABOUT"}</Text>
        <Text style={styles.bodyText}>
          {
            "A software engineer with a strong educational background in programming using the latest development tools. Skilled in professional communication, including technical documentation and presentations. Strong professional experience building mobile applications for companies leading in their industries. "
          }
        </Text>
      </BlurView>
    </View>
  );
}
