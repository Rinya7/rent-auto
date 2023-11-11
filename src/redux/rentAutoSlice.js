import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  favoritesAutos: [],
  isButtonPressed: false,
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
    addToFavorites: (state, { payload }) => {
      state.favoritesAutos = [...state.favoritesAutos, payload];
    },
    removeFromFavorites: (state, { payload }) => {
      state.favoritesAutos = state.favoritesAutos.filter(
        (id) => id !== payload,
      );
    },
    toggleButtonState: (state) => {
      state.isButtonPressed = !state.isButtonPressed;
    },
  },
});

export const {
  setFavoritesAutos,
  addToFavorites,
  removeFromFavorites,
  toggleButtonState,
} = rentAutoSlice.actions;
export const rentAutoReducer = rentAutoSlice.reducer;
