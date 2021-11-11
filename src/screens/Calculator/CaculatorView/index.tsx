import React from "react";
import { SafeAreaView } from "react-native";
import { Display } from "../../../components";
import { CalculatorState } from "../CalculatorController";
import { Keyboard } from "../../../components/Keyboard";
import { ButtonPress } from "../../../types";

import { styles } from "./styles";

interface Props {
  calculator: CalculatorState;
  handlePress: ButtonPress;
}

export const CaculatorView = ({ calculator, handlePress }: Props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Display value={calculator.displayValue} />
      <Keyboard handlePress={handlePress} />
    </SafeAreaView>
  );
};
