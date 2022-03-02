import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import State from "./src/screens/state";

//Import Screen

export default function App() {
  return (
    <View>
      <StatusBar />
      <State />
    </View>
  );
}
