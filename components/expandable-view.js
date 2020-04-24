import React, { useEffect, useState } from "react";
import { Text, View, Animated, Easing, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function ExpandableView(props) {
  const [menuHeight, setHeight] = useState(new Animated.Value(1));
  let height = 0;
  if (props.expanded) {
    height = props.height ? props.height : 450;
  }
  React.useEffect(
    () => {
      Animated.timing(menuHeight, {
        toValue: height,
        duration: 500
      }).start();
    },
    [props.expanded]
  );

  return (
    <Animated.View
      useNativeDriver={true}
      style={{
        ...props.style,
        height: menuHeight,
        opacity: 1
      }}
    >
      {props.children}
    </Animated.View>
  );
}
