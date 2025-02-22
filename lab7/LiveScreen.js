import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LiveScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Màn hình Trực tiếp</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default LiveScreen;
