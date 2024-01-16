import { useSelector, useDispatch } from 'react-redux';

import { getBasket, getTotalCount, getTotalPrice } from '../../redux/selectors';
import { deleteBasket, changeBasket } from '../../redux/basket/basket-slice';

import BasketList from './BasketList/BasketList';

const Basket = () => {
  const items = useSelector(getBasket);
  const totalCount = useSelector(getTotalCount);
  const totalPrice = useSelector(getTotalPrice);

  const dispatch = useDispatch();

  const onHandleDelete = id => {
    const action = deleteBasket(id);
    dispatch(action);
  };

  const onHandlePlus = id => {
    const action = changeBasket({ id: id, delta: 1 });
    dispatch(action);
  };

  const onHandleMinus = id => {
    dispatch(changeBasket({ id: id, delta: -1 }));
  };

  return (
    <>
      <BasketList
        list={items}
        totalPrice={totalPrice}
        totalQ={totalCount}
        onDelete={onHandleDelete}
        onPlus={onHandlePlus}
        onMinus={onHandleMinus}
      />
    </>
  );
};

export default Basket;
