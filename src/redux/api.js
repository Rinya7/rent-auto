import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseURL = 'https://64ce98200c01d81da3eef588.mockapi.io';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axios({
    baseURL,
  }),
  endpoints: (builder) => ({
    fetchAllRentAutos: builder.query({
      query: () => ({ url: '/adverts' }),
    }),
  }),
});

export const { useLazyFetchAllRentAutos } = api;
