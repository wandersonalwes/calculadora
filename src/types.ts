export type ButtonType = "number" | "operator" | "clear";

export type ButtonPress = (type: ButtonType, label: string) => void

export type CalculatorButton = {
  label: string;
  type: ButtonType;
}