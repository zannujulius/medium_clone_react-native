import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.cover}>
      <Text style={styles.medium}>Medium</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  cover: {
    width: "100%",
    height: "100%",
    backgroundColor: "#010101",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  medium: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
  },
});
