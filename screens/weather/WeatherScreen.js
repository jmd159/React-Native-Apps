import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ActivityIndicator
} from "react-native";
import CustomButton from "../../components/custom-button.js";
import { useFocusEffect } from "@react-navigation/native";
import ExpandableView from "../../components/expandable-view.js";
import { LinearGradient } from "expo-linear-gradient";
import WeatherDetails from "../../components/weather-details.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { reducer } from "./reducer.js";
import { styles } from "./style.js";
const API_KEY = "95b776cf1a0e8baaf2ced6d494854151";

const initialTextInput = {
  zipCode: ""
};

export default function WeatherScreen() {
  const [state, dispatch] = useReducer(reducer, {});
  const [{ zipCode }, setZipCode] = useState(initialTextInput);
  const [expanded, expand] = useState(null);
  async function fetchWeather() {
    dispatch({ type: "start" });
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${API_KEY}`
    );
    response = await response.json();
    if (response.message) {
      dispatch({ type: "error", ...response });
    }
    if (!response.message) {
      dispatch({ type: "success", response });
    }
  }
  //works similar to component did mount
  useEffect(() => {
    setZipCode({ ...initialTextInput });
    dispatch({ type: "intialize" });
  }, []);
  //component will unmount
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => {
        setZipCode({ ...initialTextInput });
        dispatch({ type: "intialize" });
      };

      return () => unsubscribe();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../assets/images/theone.jpg")}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollviewContainer}
      >
        <View
          style={[
            styles.weatherView,
            {
              height: state.loading || state.loaded ? 450 : 200
            }
          ]}
        >
          <TextInput
            placeholder={"Zip Code..."}
            placeholderTextColor={"white"}
            style={styles.textInput}
            value={zipCode}
            onChangeText={value => setZipCode({ ...value, zipCode: value })}
          />
          <CustomButton
            type={"outlined"}
            onPress={() => fetchWeather()}
            fillColor={"white"}
            borderColor={"black"}
            textColor={"black"}
            title={"GET WEATHER"}
            disabled={zipCode.length < 5}
            loading={state.loading}
            containerStyles={{ position: "absolute", bottom: 15 }}
          />
          {state.loaded && (
            <WeatherDetails
              weatherData={state.weather}
              loading={state.loading}
            />
          )}
          {!state.loading && !state.loaded && (
            <View>
              <Text style={styles.initialTitle}>Weather Component</Text>
            </View>
          )}
          {state.loading && <Loading />}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

function Loading() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        size="large"
        color="white"
        style={{ paddingBottom: 25 }}
      />
    </View>
  );
}
