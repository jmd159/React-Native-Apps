import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/home/HomeScreen";
import WeatherScreen from "../screens/weather/WeatherScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Profile";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "rgba(23, 56, 69, .9)"
    }
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={"ios-person"} />
          )
        }}
      />
      <BottomTab.Screen
        name="Weather"
        component={WeatherScreen}
        options={{
          title: "Weather",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-cloudy" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "PROFILE";
    case "Weather":
      return "WEATHER";
  }
}
