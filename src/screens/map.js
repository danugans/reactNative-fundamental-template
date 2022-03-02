import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const name = ["danu", "Dina", "Dani"];

  return (
    <View>
      <StatusBar />
      <Text>Name List</Text>

      {name.map((name) => (
        <Text key={name}>{name}</Text>
      ))}
    </View>
  );
}
