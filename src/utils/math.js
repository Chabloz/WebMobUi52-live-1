export function roundToDecimalPlaces(value, nbDecimalPlaces = 2) {
  return parseFloat(value.toFixed(nbDecimalPlaces));
}