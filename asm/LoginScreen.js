import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require('./logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng Nhập" onPress={() => alert("Đăng nhập thành công!")} />
      <View style={styles.iconContainer}>
        <Image source={require('./fb.png')} style={styles.icon} />
        <Image source={require('./gg.png')} style={styles.icon} />
      </View>
      <Text onPress={() => navigation.navigate("Register")} style={styles.link}>
        Chưa có tài khoản? Đăng ký
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  logo: { width: 200, height: 150, alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 8,
  },
  link: { color: "blue", textAlign: "center", marginTop: 10 },
});

export default LoginScreen;
