import { configureStore } from "@reduxjs/toolkit";
import {  persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
 } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createAction } from "@reduxjs/toolkit";
import { itemsSlice, filterSlice } from "./Slice";

const persistConfig = {
  key: 'root',
  storage,
};

export const addItems = createAction('items/addItems');
export const delItems = createAction('items/delItems');
export const upFilter = createAction('filter/upFilter');

const persistedReducer = persistReducer(persistConfig, itemsSlice.reducer);
export const store = configureStore({
  reducer: {
    items: persistedReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
