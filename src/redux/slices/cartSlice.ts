import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTotalPrice } from '../../utils/getTotalPrice';
import { ICartPizza } from './types/types';
import { rootState } from '../store';
import { getLocalCart } from '../../utils/getLocalCart';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

interface CartState {
  totalPrice: number;
  items: ICartPizza[];
}

const { totalPrice, items } = getLocalCart();
const initialState: CartState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartPizza>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    setMinusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce(getTotalPrice(), 0);
    },
    delItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce(getTotalPrice(), 0);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, delItem, setMinusItem, clearItem } = cartSlice.actions;

export const cartSelector = (state: rootState) => state.cart;

export default cartSlice.reducer;
