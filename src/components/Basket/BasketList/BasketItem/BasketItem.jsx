import Button from '../../../../shared/Components/Button/Button';
import ChangedDigit from '../../../../shared/Components/ChangedDigit/ChangetDigit';

import css from './basket-item.module.css';

const BasketItem = ({ product, onDelete, onPlus, onMinus }) => {
  const { id, name, description, count, price } = product;
  return (
    <li className={css.row}>
      <div className={`${css.important} ${css.item}`}>{name}</div>
      <div className={css.item}>{description}</div>
      <div className={css.item}>
        <ChangedDigit
          value={count}
          onMinus={() => onMinus(id)}
          onPlus={() => onPlus(id)}
        />
      </div>
      <div className={`${css.centered} ${css.item}`}> {price}$</div>
      <div className={`${css.centered} ${css.item}`}>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </div>
    </li>
  );
};

export default BasketItem;
