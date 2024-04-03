
export function stockFormat(value: string | null) {
  if (value === null) {
    return "Под заказ";
  }
  const count = parseInt(value);
  const newValue = count === 0 ? "Под заказ" : count;
  return newValue;
}
