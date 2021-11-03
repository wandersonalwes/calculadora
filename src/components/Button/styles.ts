import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

const { width } = Dimensions.get('window');

const DEFAULT_WIDTH = width / 4;
const DOUBLE_WIDTH = DEFAULT_WIDTH * 2;
const TRIPLE_WIDTH = DEFAULT_WIDTH * 3;

export const styles = StyleSheet.create({
  container: {
    width:DEFAULT_WIDTH,
    height:DEFAULT_WIDTH,
    backgroundColor: theme.colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    fontSize: 24,
  },
  equals: {
    backgroundColor: theme.colors.success,
  },
  clear: {
    backgroundColor: theme.colors.danger,
  },
  double: {
    width: DOUBLE_WIDTH,
  },
  triple: {
    width: TRIPLE_WIDTH,
  },
  operator: {
    backgroundColor: theme.colors.primary,
  },
});
