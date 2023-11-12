import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://64ce98200c01d81da3eef588.mockapi.io',
  }),

  endpoints: (builder) => ({
    fetchAllRentAutos: builder.query({
      query: ({ page = 0, limit = 0, make = 0, rentalPrice = 0 } = {}) => ({
        url: `/adverts${
          page || limit || make || rentalPrice
            ? `?${page ? `page=${page}` : ''}${limit ? `&limit=${limit}` : ''}${
                make ? `&make=${make}` : ''
              }${rentalPrice ? `&rentalPrice<=${rentalPrice}` : ''}`
            : ''
        }`,
      }),
    }),
    fetchByFilter: builder.query({
      query: ({ make = '', rentalPrice = 0 } = 0) => ({
        url: `/adverts${
          make || rentalPrice
            ? `?${make ? `make=${make}` : ''}${
                rentalPrice ? `&rentalPrice<=${rentalPrice}` : ''
              }`
            : ''
        }`,
      }),
    }),
  }),
});

export const { useLazyFetchAllRentAutosQuery, useLazyFetchByFilterQuery } = api;
