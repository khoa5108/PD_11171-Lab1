import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://anhgaixinh.vn/wp-content/uploads/2023/02/avatar-gai.jpg" }} // Thay bằng URL ảnh thật
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Khoa</Text>
      <Text style={styles.info}>Tuổi: 20</Text>
      <Text style={styles.info}>Ngành: Mobile Development</Text>
      <Text style={styles.info}>Trường: FPT Polytechnic Đà Nẵng</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
});

export default ProfileScreen;
