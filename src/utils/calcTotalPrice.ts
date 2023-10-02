import { ICartPizza } from '../redux/slices/types/types';
import { getTotalPrice } from './getTotalPrice';

export const calcTotalPrice = (items: ICartPizza[]) => {
  return items.reduce(getTotalPrice(), 0);
};
