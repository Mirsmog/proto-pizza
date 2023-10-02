import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Sort {
  name: string;
  sortProp: 'rating' | 'title' | 'price';
}

interface filterState {
  categoryId: number;
  pageCount: number;
  sortOrder: string;
  searchValue: string;
  sort: Sort;
}

const initialState: filterState = {
  categoryId: 0,
  pageCount: 1,
  sortOrder: 'desc',
  searchValue: '',
  sort: {
    name: 'популярности',
    sortProp: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setPageCount, setSortOrder, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
