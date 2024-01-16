import BasketItem from './BasketItem/BasketItem';

import css from './basket-list.module.css';

const BasketList = ({
  list,
  onDelete,
  onPlus,
  onMinus,
  totalPrice,
  totalQ,
}) => {
  const elements = list.map(product => (
    <BasketItem
      key={product.id}
      product={product}
      onDelete={onDelete}
      onPlus={onPlus}
      onMinus={onMinus}
    />
  ));

  return (
    <ul className={css.list}>
      {elements}
      <li className={`${css.row} ${css.total}`}>
        <div className={`${css.important} ${css.item}`}>Total</div>
        <div></div>
        <div className={`${css.centered} ${css.item} ${css.important}`}>
          {totalQ}
        </div>
        <div className={`${css.centered} ${css.item} ${css.important}`}>
          {totalPrice}$
        </div>
      </li>
    </ul>
  );
};

export default BasketList;
