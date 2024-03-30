import { IntervalToMillisecondsMap } from "./types";

export const SEARCH_TITLE = 'Buscar Acciones';
export const SEARCH_FIELD_NAME = 'Nombre';
export const SEARCH_FIELD_SYMBOL = 'Símbolo';
export const SEARCH_BUTTON_TEXT = 'Buscar';

export const INTERVALS = [
  { value: "1min", label: "1 min" },
  { value: "5min", label: "5 min" },
  { value: "15min", label: "15 min" }
];

export const intervalToMillisecondsMap: IntervalToMillisecondsMap = {
  '1min': 60_000,
  '5min': 300_000,
  '15min': 900_000,
} as const;