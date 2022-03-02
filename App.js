import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Map from "./src/screens/map";

//Import Screen

export default function App() {
  return (
    <View>
      <StatusBar />
      <Map />
    </View>
  );
}
