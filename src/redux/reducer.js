import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { addBasket, deleteBasket } from './actions';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialBasket = [
  {
    name: 'Bike',
    price: 73,
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    dateAppeal: '2024-01-11T20:35:06.681Z',
    id: '1',
    count: 1,
  },
];

const basketReducer = createReducer(initialBasket, builder => {
  builder.addCase(addBasket, (state, { payload }) => [...state, payload]);
  builder.addCase(deleteBasket, (state, { payload }) =>
    state.filter(({ id }) => id !== payload)
  );
});

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({ basket: basketReducer });

export const persistedReducer = persistReducer(persistConfig, rootReducer);
