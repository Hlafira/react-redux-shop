import { createAction } from '@reduxjs/toolkit';

export const addBasket = createAction('basket/add', data => {
  return { payload: { ...data, count: 1 } };
});
/*export const addBasket = data => {
  return {
    type: ADD_BASKET,
    payload: { ...data, count: 1 },
  };
};
*/
export const deleteBasket = createAction('basket/delete');
/*export const deleteBasket = data => {
  return {
    type: DELETE_BASKET,
    payload: data,
  };
};*/
