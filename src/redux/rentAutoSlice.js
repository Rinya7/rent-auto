import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  favoritesAutos: [],
  isLoading: false,
  isError: false,
  error: null,
};

const rentAutoSlice = createSlice({
  name: 'rentAuto',
  initialState,
  reducers: {
    setFavoritesAutos: (state, { payload }) => {
      state.favoritesAutos = payload;
    },
  },
});

export const { setFavoritesAutos } = rentAutoSlice.actions;
export const rentAutoReducer = rentAutoSlice.reducer;
