import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import { useFonts, BalsamiqSans_400Regular, BalsamiqSans_400Regular_Italic } from "@expo-google-fonts/balsamiq-sans";

// Import Container
import Container from "./Container";
import AppLoading from "expo-app-loading";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  // Setup Font
  const fontConfig = {
    BalsamiqsSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic",
      },
    },
  };
  // Setup Theme
  const customColor = {
    primary: {
      50: "#ecfeff",
      100: "#cffafe",
    },
  };
  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customColor,
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // Setup Provider
      <NativeBaseProvider>
        <Container />
      </NativeBaseProvider>
    );
  }
}
