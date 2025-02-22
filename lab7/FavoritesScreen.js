import React from "react";
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from "react-native";

const favoriteItems = [
  { id: "1", title: "Bộ phim yêu thích", image: "https://via.placeholder.com/100" },
  { id: "2", title: "Bài hát hay", image: "https://via.placeholder.com/100" },
  { id: "3", title: "Cuốn sách hay", image: "https://via.placeholder.com/100" },
  { id: "4", title: "Món ăn ưa thích", image: "https://via.placeholder.com/100" },
  { id: "5", title: "Địa điểm du lịch", image: "https://via.placeholder.com/100" },
];

const FavoritesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Danh sách yêu thích</Text>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        scrollEnabled={false} // Tránh FlatList chiếm quyền ScrollView
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "center",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
});

export default FavoritesScreen;
