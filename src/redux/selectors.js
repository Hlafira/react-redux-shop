export const getBasket = ({ basket }) => {
  return basket;
};



export const getTotalCount = ({ basket }) => {
  return basket.reduce((prev, { count }) => (prev += count), 0);
};

export const getTotalPrice = ({ basket }) => {
  return basket.reduce((prev, { price }) => (prev += price), 0);
};
