import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api';
import { rentAutoReducer } from './rentAutoSlice';

const persistConfig = {
  key: 'rentAuto',
  storage,
  whitelist: ['favoritesAutos', 'isButtonPressed'],
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    rentAuto: persistReducer(persistConfig, rentAutoReducer),
    states: rentAutoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
