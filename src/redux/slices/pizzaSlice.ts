import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import IPizza from './types/types';

export const fetchPizza = createAsyncThunk<IPizza[], Record<string, string>>(
  'pizza/fetchPizzaStatus',
  async (params) => {
    const { categoryBy, pageBy, sortBy, orderBy, searchBy } = params;
    const { data } = await axios.get(
      `https://6514093b8e505cebc2ea978b.mockapi.io/items?${categoryBy}${pageBy}${sortBy}${orderBy}${searchBy}`
    );
    return data;
  }
);

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaState {
  items: IPizza[];
  status: Status;
}

const initialState: PizzaState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<IPizza[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.items = [];
        state.status = Status.ERROR;
      });
  },
});
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
