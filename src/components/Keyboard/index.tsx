import React from "react";
import { View } from "react-native";
import { Button } from "..";
import { ButtonPress } from "../../types";
import { calculatorButtons } from "../../utils/calculatorButtons";

import { styles } from "./styles";

interface Props {
  handlePress: ButtonPress;
}

export const Keyboard = ({ handlePress }: Props) => {
  return (
    <View style={styles.container}>
      {calculatorButtons.map(({ label, type }) => (
        <Button
          key={label}
          label={label}
          onPress={() => handlePress(type, label)}
        />
      ))}
    </View>
  );
};
