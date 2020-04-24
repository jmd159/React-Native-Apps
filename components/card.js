import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.8,
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 12,
    justifyContent: "center"
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: "oswald",
    fontSize: 17
  },
  childreContainer: { marginHorizontal: 16, flexDirection: "row", flex: 1 }
});

export default function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title.toUpperCase()}</Text>
      <View style={styles.childrenContainer}>{props.children}</View>
    </View>
  );
}
