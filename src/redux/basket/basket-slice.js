import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addBasket: {
      reducer(state, { payload }) {
        const index = state.findIndex(el => el.id === payload.id);
        if (index >= 0) {
          state[index].count = state[index].count + 1;
        } else {
          state.push(payload);
        }
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            count: 1,
          },
        };
      },
    },
    changeBasket: (state, { payload }) => {
      const { id, delta } = payload;
      const index = state.findIndex(el => el.id === id);
      const product = state[index];
      product.count += delta;
      if (product.count <= 0) {
        state.splice(index, 1);
      } else {
        state[index] = product;
      }
    },
    deleteBasket: (state, { payload }) => {
      return state.filter(el => el.id !== payload);
    },
    plusBasket: (state, { payload }) => {
      const index = state.findIndex(el => el.id === payload);
      if (index >= 0) {
        state[index].count += 1;
      }
    },
    minusBasket: (state, { payload }) => {
      const index = state.findIndex(el => el.id === payload);
      if (index >= 0) {
        const { count } = state[index];
        if (count <= 1) {
          state.splice(index, 1);
        } else {
          state[index].count -= 1;
        }
      }
    },
  },
});

export const {
  addBasket,
  deleteBasket,
  plusBasket,
  minusBasket,
  changeBasket,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
