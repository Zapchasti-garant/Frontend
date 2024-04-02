export interface Product {
  category?: string;
  id: string;
  img: string;
  number: string | null;
  name: string;
  price: string;
};
export interface Response {
  rows: Product[];
  count: number;
};
