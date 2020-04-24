import * as React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WeatherIcon from "./weather-icons.js";

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontWeight: "400",
    letterSpacing: 0.24,
    lineHeight: 18,
    fontSize: 18,
    marginTop: 5
  },
  tempDegree: {
    fontSize: 50,
    fontWeight: "300",
    color: "#ffffff",
    marginRight: 30,
    paddingBottom: 15
  },
  weatherContainer: {
    height: 150,
    flexDirection: "row",
    alignItems: "center"
  },
  tempText: {
    fontSize: 85,
    fontWeight: "300",
    color: "#ffffff"
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginTop: 25
  }
});
const degree = "\xB0";

export default function WeatherDetails({
  weatherData: {
    name,
    temperature,
    description,
    humidity,
    feelsLike,
    low,
    high,
    windSpeed
  }
}) {
  return (
    <View style={{ width: 300 }}>
      <Text style={styles.textTitle}>{name}</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.tempText}>{`${Math.round(temperature)}`}</Text>
        <Text style={styles.tempDegree}>{`${degree}`}</Text>
        <WeatherIcon description={description} />
      </View>
      <Text style={styles.text}>{`Humidity: ${humidity}%`}</Text>
      <Text style={styles.text}>{`Feels Like: ${Math.round(
        feelsLike
      )}${degree}`}</Text>
      <Text style={styles.text}>{`Could get as low as: ${low}${degree}`}</Text>
      <Text
        style={styles.text}
      >{`Could get as high as: ${high}${degree}`}</Text>
      <Text style={styles.text}>{`Winds with speeds up to: ${windSpeed}`}</Text>
    </View>
  );
}
