import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Props from "./src/screens/props";

//Import Screen

export default function App() {
  return (
    <View>
      <StatusBar />
      <Props />
    </View>
  );
}
