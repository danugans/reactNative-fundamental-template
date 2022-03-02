import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Import Component here
import Header from "./src/components/header";
import Content from "./src/components/content";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
