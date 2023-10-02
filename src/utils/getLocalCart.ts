import { ICartPizza } from '../redux/slices/types/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getLocalCart = () => {
  const data = localStorage.getItem('cart');
  const items: ICartPizza[] = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
