import React, { useState, useCallback } from "react";
import { View, Button, SafeAreaView, Text } from "react-native";
import Bai1 from "./lab4/bai1";
import Bai2 from "./lab4/bai2";
import Bai3 from "./lab4/bai3";
import Lab5 from "./lab5";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const screens = [
  { id: 1, title: "Bài 1", component: <Bai1 /> },
  { id: 2, title: "Bài 2", component: <Bai2 /> },
  { id: 3, title: "Bài 3", component: <Bai3 /> },
  { id: 4, title: "Lab 5", component: <Lab5 /> },
];

const App = () => {
  const [screen, setScreen] = useState(1);

  // Load fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"), // Đúng thư mục chuẩn
  });
  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* Hiển thị màn hình hiện tại */}
      <View style={{ flex: 1 }}>{screens.find((s) => s.id === screen)?.component}</View>

      {/* Thanh button chuyển màn hình */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
        {screens.map((s) => (
          <Button key={s.id} title={s.title} onPress={() => setScreen(s.id)} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
