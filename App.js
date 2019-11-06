import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";

import Loading from "./Loading";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); // 사용자에게 위치정보 제공 허락 요구
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
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
