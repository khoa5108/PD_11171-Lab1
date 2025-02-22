import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài Đặt</Text>

      <View style={styles.option}>
        <Text style={styles.optionText}>Chế độ tối</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
          value={isDarkMode}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.optionText}>Thông báo</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsNotificationsEnabled((prev) => !prev)}
          value={isNotificationsEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
