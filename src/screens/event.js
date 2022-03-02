import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert("good morning honey");
  }

  return (
    <View>
      <StatusBar />
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("good morning honey")}>
        <Text>Click here</Text>
      </TouchableOpacity>
    </View>
  );
}
