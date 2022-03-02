import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function getBatch() {
    return "Batch 30";
  }

  // Create a variable Here
  const companyName = "Dumbways.id";

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Welcome to {companyName} class</Text>
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
