export default function numberFormat(value: any) {
  const count = parseInt(value);
  return new Intl.NumberFormat().format(count);
}
