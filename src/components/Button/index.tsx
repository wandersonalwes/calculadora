import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface Props {
  label: string;
  onPress: () => void;
}

export const Button = ({ label, onPress }: Props) => {
  const operators = ["+", "-", "*", "/"];

  const buttonStyles = [
    styles.container,
    Object.is(label, "=") && styles.equals,
    Object.is(label, "AC") && styles.triple,
    Object.is(label, "0") && styles.double,
    operators.includes(label) && styles.operator,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
