import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  value: string;
}

export const Display = ({ value }: Props) => {
  const textStyle = value.length < 6 ? styles.textBig : styles.text;
  return (
    <View style={styles.container}>
      <Text style={textStyle} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};
