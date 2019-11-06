import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>노랑뷰</Text>
      </View>
      <View style={styles.redView}>
        <Text>빨강뷰</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue"
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  redView: {
    flex: 1,
    backgroundColor: "red"
  }
});
