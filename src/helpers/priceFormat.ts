export default function numberFormat(value: any) {
    return new Intl.NumberFormat().format(value);
  }
