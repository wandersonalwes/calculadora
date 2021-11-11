import React from "react";
import { View, SafeAreaView } from "react-native";
import { Button, Display } from "../../../components";
import { CalculatorState } from "../CalculatorController";
import {
  ButtonType,
  calculatorButtons,
} from "../../../utils/calculatorButtons";

import { styles } from "./styles";

interface Props {
  calculator: CalculatorState;
  handlePress: (type: ButtonType, label: string) => void;
}

export const CaculatorView = ({ calculator, handlePress }: Props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Display value={calculator.displayValue} />
      <View style={styles.buttons}>
        {calculatorButtons.map(({ label, type }) => (
          <Button
            key={label}
            label={label}
            onPress={() => handlePress(type, label)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};
