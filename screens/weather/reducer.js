import * as React from 'react';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  weather: {}
};


export function reducer(state, action) {
  switch (action.type) {
    case "intialize":
      return {
        ...initialState
      };
    case "start":
      return {
        ...initialState,
        loading: true
      };
    case "success":
      return {
        ...initialState,
        loaded: true,
        weather: {
          description: action.response.weather[0].description,
          name: action.response.name,
          windSpeed: action.response.wind.speed,
          humidity: action.response.main.humidity,
          temperature: action.response.main.temp,
          feelsLike: action.response.main.feels_like,
          low: action.response.main.temp_min,
          high: action.response.main.temp_max
        }
      };
    case "error":
      return {
        ...initialState,
        error: true,
        message: action.message
      };
    default:
      return state;
  }
}
