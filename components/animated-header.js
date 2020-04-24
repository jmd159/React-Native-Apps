import React, { useState, useRef } from "react";
import {
  View,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ProfileImageContainer from "./profile-photo-container.js";
import { Dimensions } from "react-native";
import Card from "./card.js";
import ImageViewer from "./image-viewer.js";

const screenWidth = Math.round(Dimensions.get("window").width);

const image = [
  {
    // eslint-disable-next-line
    source: require("../assets/images/justin.png"),
    title: "Justin Daut",
    width: 800,
    height: 800
  }
];

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    width: screenWidth
  },
  touchableProfile: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    backgroundColor: "gray",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "white",
    position: "absolute",
    bottom: -60
  },
  imageContainer: {
    resizeMode: "contain",
    width: 1130,
    height: 140
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 5
  }
});

export default function AnimatedHeader(props) {
  const [isVisible, setVisibility] = useState(false);
  return (
    <Animated.View
      useNativeDriver={true}
      style={[{ height: props.height }, styles.container]}
    >
      <Animated.Image
        source={require("../assets/images/header-family.png")}
        style={[{ height: props.height }, styles.image]}
      />
      <TouchableOpacity
        onPress={() => setVisibility(!isVisible)}
        style={styles.touchableProfile}
      >
        <ProfileImageContainer
          image={require("../assets/images/justin.png")}
          imageStyle={styles.imageContainer}
        />
      </TouchableOpacity>

      <Text style={[styles.name, { left: 45 }]}>JUSTIN</Text>
      <Text style={[styles.name, { right: 45 }]}>DAUT</Text>
      <ImageViewer
        images={image}
        isVisible={isVisible}
        setVisibility={() => setVisibility(false)}
      />
    </Animated.View>
  );
}
