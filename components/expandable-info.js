import React, { useState, useRef } from "react";
import { Text, View, Animated, Easing, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import EmploymentInfo from "./employment-info.js";

const skills = [
  { key: 0, skill: "React Native" },
  { key: 1, skill: "JavaScript" },
  { key: 2, skill: "Redux" },
  { key: 3, skill: "API REST" },
  { key: 4, skill: "Ruby on Rails (API)" },
  { key: 5, skill: "React.s" },
  { key: 6, skill: "React Hooks" },
  { key: 7, skill: "Java" },
  { key: 8, skill: "XCode" },
  { key: 9, skill: "Android Studio" },
  { key: 10, skill: "Github" }
];

const length = Math.ceil(skills.length / 2);

const leftSide = skills.splice(0, length);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    minHeight: 40,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.6
  },
  blurView: {
    flex: 1,
    borderRadius: 20
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row"
  },
  rowText: {
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 17,
    letterSpacing: 0.44,
    marginTop: 8,
    marginLeft: 15
  },
  iconContainer: {
    position: "absolute",
    right: 5,
    padding: 5
  },
  collapsableView: {
    borderRadius: 20,
    backgroundColor: "transparent"
  }
});

//starting integrating props this week !(props) => ({title, info, object}) fix rolling animation
export default function ExpandableInfo(props) {
  const [expanded, expand] = useState(null);
  const roll = useRollRight(expanded);
  const rollBack = useRollBack(expanded);
  const borderValue = expanded ? 1 : 0;
  const spinBack = rollBack.interpolate({
    inputRange: [0, 1],
    outputRange: ["45deg", "0deg"]
  });
  const spinRight = roll.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"]
  });
  return (
    <View style={styles.container}>
      <BlurView tint="light" intensity={45} style={styles.blurView}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.rowText}>{props.title}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Animated.View>
              <Ionicons
                name={props.iconName}
                size={28}
                color={props.iconColor}
                onPress={() => expand(expanded === null ? true : !expanded)}
              />
            </Animated.View>
          </View>
        </View>
        <CollapsableView
          style={styles.collapsableView}
          expanded={expanded}
          height={props.height}
        >
          {props.title === "Skills" ? (
            <BulletColumns />
          ) : (
            <EmploymentInfo
              currentStatus={"remote"}
              currentJobTitle={"Software Engineer"}
              currentCompanyName={"Bunk1"}
            />
          )}
        </CollapsableView>
      </BlurView>
    </View>
  );
}

const bulletStyles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  columnOne: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    marginTop: 15
  },
  textContainer: {
    width: 125,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0, .8)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    padding: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 1
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold"
  },
  columnTwo: {
    flex: 1,
    flexDirection: "column",
    marginTop: 15
  }
});

function BulletColumns() {
  return (
    <View style={bulletStyles.container}>
      <View style={bulletStyles.columnOne}>
        {leftSide.map(item => {
          return (
            <View key={item.key} style={bulletStyles.textContainer}>
              <Text style={bulletStyles.text}>{item.skill}</Text>
            </View>
          );
        })}
      </View>
      <View style={bulletStyles.columnTwo}>
        {skills.map(k => {
          return (
            <View key={k.key} style={bulletStyles.textContainer}>
              <Text style={bulletStyles.text}>{k.skill}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

//animation functions

const useRollRight = expanded => {
  const spinVal = useRef(new Animated.Value(0)).current;
  React.useEffect(
    () => {
      Animated.timing(spinVal, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }).start();
    },
    [expanded]
  );
  return spinVal;
};

const useRollBack = expanded => {
  const spinBack = useRef(new Animated.Value(1)).current;
  React.useEffect(
    () => {
      Animated.timing(spinBack, {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear
      }).start();
    },
    [!expanded]
  );
  return spinBack;
};

const CollapsableView = props => {
  const [menuHeight, setHeight] = useState(new Animated.Value(0));
  let height = 0;
  if (props.expanded) {
    height = props.height ? props.height : 300;
  }
  React.useEffect(
    () => {
      Animated.timing(menuHeight, {
        toValue: height,
        duration: 350
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
        opacity: 0.5
      }}
    >
      {props.children}
    </Animated.View>
  );
};
