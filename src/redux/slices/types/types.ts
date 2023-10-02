export default interface IPizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  sizes: number[];
  types: number[];
}

export interface ICartPizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
}
