import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

import Loading from "./Loading";

export default class App extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    console.log("location", location);
  };
  componentDidMount() {
    // React lifecylce 메소드
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
