<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> d093add9be074cd89a44f1de3bda15043d8b81fb
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./asm/LoginScreen";
import RegisterScreen from "./asm/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD
>>>>>>> 9aabece1d0ba8af2d46502ae9730f9bdad0f548d
=======
>>>>>>> d093add9be074cd89a44f1de3bda15043d8b81fb
