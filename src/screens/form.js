import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.header}>Login</Text>
      <Text style={styles.label} placeholder="Masukkan email">
        Email
      </Text>
      <Textinput style={styles.inputText} />
      <Text style={styles.label} placeholder="Masukkan Password">
        Password
      </Text>
      <Textinput style={styles.inputText} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    color: "orange",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  label: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputText: {
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    backgroundColor: "orange",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});
