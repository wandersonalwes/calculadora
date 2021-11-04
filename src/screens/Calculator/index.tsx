import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { Button, Display } from "../../components";
import { ButtonType, calculatorButtons } from "../../utils/calculatorButtons";

import { styles } from "./styles";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: "",
  values: [0, 0],
  current: 0,
};

export const CalculatorScreen = () => {
  const [calculator, setCalculator] = useState(initialState);

  const handleClear = () => {
    setCalculator(initialState);
  };

  const handleDigit = (digit: string) => {
    const { displayValue, clearDisplay, values, current } = calculator;
    if (displayValue.length >= 10) return;
    if (digit === "." && !clearDisplay && displayValue.includes(".")) {
      return;
    }

    const clearDisplayValue = displayValue === "0" || clearDisplay;
    const currentValue = clearDisplayValue ? "" : displayValue;
    const newDisplayValue = currentValue + digit;

    setCalculator((prevState) => ({
      ...prevState,
      displayValue: newDisplayValue,
      clearDisplay: false,
    }));

    if (digit !== ".") {
      const newValue = parseFloat(newDisplayValue);
      const copyValues = [...values];
      copyValues[current] = newValue;
      setCalculator((prevState) => ({
        ...prevState,
        values: copyValues,
      }));
    }
  };

  const handleOperation = (operationParam: string) => {
    const { values, current, operation } = calculator;
    if (current === 0) {
      setCalculator((prevState) => ({
        ...prevState,
        operation: operationParam,
        current: 1,
        clearDisplay: true,
      }));
    } else {
      const equals = operationParam === "=";
      const newValues = [...calculator.values];

      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`);
      } catch (e) {
        newValues[0] = values[0];
      }

      newValues[1] = 0;

      setCalculator({
        displayValue: `${newValues[0]}`,
        operation: equals ? "" : operationParam,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values: newValues,
      });
    }
  };

  const handlePress = (type: ButtonType, value = "") => {
    const handlerTypes = {
      number: () => handleDigit(value),
      operator: () => handleOperation(value),
      clear: () => handleClear(),
    };
    const handler = handlerTypes[type];
    handler();
  };

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
