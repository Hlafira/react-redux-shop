import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addBasket: {
      reducer(state, { payload }) {
        state.push(payload);
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
    deleteBasket: (state, { payload }) => {
      console.log(payload);
      return state.filter(el => el.id !== payload);
    },
  },
});

export const { addBasket, deleteBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
