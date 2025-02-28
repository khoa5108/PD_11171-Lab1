import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

const ChoBanScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Cho bạn</Text>
  </View>
);

const TrucTiepScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Trực tiếp</Text>
  </View>
);

const TroChoiScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Trò chơi</Text>
  </View>
);

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#4a3d8f" },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", color: "white" },
        tabBarIndicatorStyle: { backgroundColor: "white", height: 3 },
        tabBarShowIcon: true,
        tabBarLabel: ({ focused }) => {
          let iconName;
          if (route.name === "Cho Bạn") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Trực Tiếp") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "Trò Chơi") {
            iconName = focused ? "game-controller" : "game-controller-outline";
          }
          return (
            <View style={styles.tabLabel}>
              <Text style={styles.tabText}>{route.name}</Text>
              <Ionicons name={iconName} size={18} color="white" style={styles.icon} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Cho Bạn" component={ChoBanScreen} />
      <Tab.Screen name="Trực Tiếp" component={TrucTiepScreen} />
      <Tab.Screen name="Trò Chơi" component={TroChoiScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
  tabLabel: { flexDirection: "row", alignItems: "center" },
  tabText: { color: "white", fontSize: 12, fontWeight: "bold" },
  icon: { marginLeft: 5 }, // Khoảng cách giữa text và icon
});

export default TopTabs;
