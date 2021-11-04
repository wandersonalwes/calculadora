export type ButtonType = "number" | "operator" | "clear";

type CalculatorButtons = {
  label: string;
  type: ButtonType;
}[]

export const calculatorButtons = [
  {
    label: "AC",
    type: "clear",
  },
  {
    label: "/",
    type: "operator",
  },
  {
    label: "7",
    type: "number",
  },
  {
    label: "8",
    type: "number",
  },
  {
    label: "9",
    type: "number",
  },
  {
    label: "*",
    type: "operator",
  },
  {
    label: "4",
    type: "number",
  },
  {
    label: "5",
    type: "number",
  },
  {
    label: "6",
    type: "number",
  },
  {
    label: "-",
    type: "operator",
  },
  {
    label: "3",
    type: "number",
  },
  {
    label: "2",
    type: "number",
  },
  {
    label: "1",
    type: "number",
  },
  {
    label: "+",
    type: "operator",
  },
  {
    label: "0",
    type: "number",
  },
  {
    label: ".",
    type: "number",
  },
  {
    label: "=",
    type: "operator",
  },
] as CalculatorButtons;

