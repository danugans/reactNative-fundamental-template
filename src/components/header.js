import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <Text>Hi Danu!</Text>
      <StatusBar />
    </View>
  );
}
