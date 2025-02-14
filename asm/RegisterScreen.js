import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <Image
            source={require('./logo.png')}
            style={styles.logo}
          />
      <Text style={styles.title}>Đăng Ký</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="Đăng Ký" onPress={() => alert("Đăng ký thành công!")} />
        <View style={styles.iconContainer}>
                <Image source={require('./fb.png')} style={styles.icon} />
                <Image source={require('./gg.png')} style={styles.icon} />
              </View>
      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
        Đã có tài khoản? Đăng nhập
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  logo: { width: 300, height: 200, alignSelf: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { color: "blue", textAlign: "center", marginTop: 10 },
  hoverEffect: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'solid',
  },
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

export default RegisterScreen;
