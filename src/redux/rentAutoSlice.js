import { createSlice } from '@reduxjs/toolkit';

const rentAutoSlice = createSlice({
  name: 'rentAuto',

  initialState: { rentAutos: [] },

  reducers: {
    addAuto(state, action) {
      state.autos.push(action.payload);
    },
    deleteAuto(state, action) {
      state.autos = state.autos.filter((auto) => auto.id !== action.payload);
    },
  },
});

export const { addAuto, deleteAuto } = rentAutoSlice.actions;

export const rentAutoReducer = rentAutoSlice.reducer;
