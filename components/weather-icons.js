import React, { useState } from "react";
import { View, Image } from "react-native";

export default function WeatherIcon({ description }) {
  return (
    <View>
      <SetIcon description={description} />
    </View>
  );
}

function SetIcon({ description }) {
  const type = getTypes(description);
  switch (type) {
    case "rain":
      return (
        <Image
          source={require("../assets/weather-icons/rain.png")}
          style={{ width: 200, height: 200 }}
        />
      );
    case "thunderstorm":
      return (
        <Image
          source={require("../assets/weather-icons/thunderstorm.png")}
          style={{ width: 200, height: 200 }}
        />
      );
    case "cloudy":
      return (
        <Image
          source={require("../assets/weather-icons/sunny-clouds.png")}
          style={{ width: 200, height: 200 }}
        />
      );
    case "fog":
      return (
        <Image
          source={require("../assets/weather-icons/foggy.png")}
          style={{ width: 200, height: 200 }}
        />
      );
    case "sunny":
      return (
        <Image
          source={require("../assets/weather-icons/sunny.png")}
          style={{ width: 200, height: 200 }}
        />
      );
  }
}

function getTypes(description) {
  return description.includes("thunderstorm")
    ? "thunderstorm"
    : description.includes("snow") || description.includes("sleet")
    ? "snow"
    : description.includes("clear")
    ? "sunny"
    : description.includes("clouds")
    ? "cloudy"
    : description.includes("rain")
    ? "rain"
    : description.includes("fog")
    ? "fog"
    : "sunny";
}
