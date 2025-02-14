import React from "react";
import { ImageBackground, StatusBar, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../lab5/styles"; // Kiểm tra lại file styles.js để đảm bảo export đúng

const Lab5 = () => {
  return (
    <View style={styles.container}>
      {/* StatusBar trong suốt */}
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      <ImageBackground source={require("../assets/images/anh1.png")} style={styles.image}>
        <View style={styles.details}>
          <Text style={styles.text}>
            <Text style={styles.firstLine}>Discover{'\n'} </Text>
            <Text style={styles.secondLine}>World with us</Text>
          </Text>
          <Text style={styles.textStyle}>Discover world with us</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Lab5;
