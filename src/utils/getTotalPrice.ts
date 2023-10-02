import { ICartPizza } from '../redux/slices/types/types';

export function getTotalPrice() {
  return (sum: number, obj: ICartPizza) => obj.price * obj.count + sum;
}
