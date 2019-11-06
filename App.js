import React from "react";
import axios from "axios";
import { Alert } from "react-native";
import * as Location from "expo-location";

import Loading from "./Loading";
import { API_KEY } from "./api";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log("날시 data", data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); // 사용자에게 위치정보 제공 허락 요구
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    // React lifecylce 메소드
    console.log("시작!!");
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
