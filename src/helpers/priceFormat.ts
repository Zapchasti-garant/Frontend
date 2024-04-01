export default function numberFormat(value: any) {
  const count = parseInt(value);
  return new Intl.NumberFormat().format(count);
}

export function stockFormat(value: string | null) {
  if (value === null) {
    return "Под заказ";
  }
  const count = parseInt(value);
  const newValue = count === 0 ? "Под заказ" : count;
  return newValue;
}
