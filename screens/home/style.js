import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  imageStyle: {
    resizeMode: "contain",
    width: 1130,
    height: 140
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: "gray",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray"
  }
});
