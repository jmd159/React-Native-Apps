import * as WebBrowser from "expo-web-browser";
import React, { useState, useRef, useReducer } from "react";
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfileImageContainer from "../../components/profile-photo-container.js";
import ImageViewer from "../../components/image-viewer.js";
import ExpandableInfo from "../../components/expandable-info.js";
import { MonoText } from "../../components/StyledText";
import Card from "../../components/card.js";
import AnimatedHeader from "../../components/animated-header.js";
import AboutMe from "../../components/about-me.js";
import { styles } from "./style.js";

const image = [
  {
    // eslint-disable-next-line
    source: require("../../assets/images/justin.png"),
    title: "Justin Daut",
    width: 800,
    height: 800
  }
];
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 70;

export default function HomeScreen() {
  const [isVisible, setVisibility] = useState(false);
  const changeHeight = useRef(new Animated.Value(0)).current;

  const height = changeHeight.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp"
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/profile-background.jpg")}
      />
      <ScrollView
        scrollEventThrottle={16}
        automaticallyAdjustContentInsets={true}
        scrollToOverflowEnabled={true}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: changeHeight } } }
        ])}
      >
        <AboutMe />
        <ExpandableInfo
          title={"Skills"}
          iconName={"ios-add-circle"}
          iconColor={"black"}
        />
        <ExpandableInfo
          title={"Employment History"}
          iconName={"ios-add-circle"}
          iconColor={"black"}
          height={600}
        />
      </ScrollView>
      <AnimatedHeader height={height} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "PROFILE"
};
