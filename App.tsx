import React from "react";
import { StatusBar } from "react-native";
import { CalculatorScreen } from "./src/screens/Calculator";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <CalculatorScreen />
    </>
  );
}
