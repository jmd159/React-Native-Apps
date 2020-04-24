import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  scrollviewContainer: {
    flex: 1,
    justifyContent: "center"
  },
  weatherView: {
    marginHorizontal: 24,
    backgroundColor: "black",
    opacity: 0.6,
    borderRadius: 8,
    alignItems: "center"
  },
  textInput: {
    width: 200,
    paddingLeft: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    position: "absolute",
    bottom: 80,
    height: 25,
    color: "white"
  },
  initialTitle: {
    color: "white",
    fontSize: 34,
    fontWeight: "400",
    marginTop: 15
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
