import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const member = [
    {
      name: "Danu",
    },
    {
      name: "Dina",
    },
    {
      name: "Dani",
    },
  ];
  return (
    <View>
      <StatusBar />
      <FlatList data={member} renderItem={({ item }) => <Text>{item.name}</Text>} keyExtractor={(item) => item.name} />
    </View>
  );
}
