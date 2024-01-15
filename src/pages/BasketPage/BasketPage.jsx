import { useSelector, useDispatch } from 'react-redux';
import styles from './basket-page.module.css';
import { getBasket } from '../../redux/selectors';

import { deleteBasket } from '../../redux/actions';

import Button from '../../shared/Components/Button';

const BasketPage = () => {
  const items = useSelector(getBasket);

  const dispatch = useDispatch();

  const onHandleDelete = id => {
    const action = deleteBasket(id);
    dispatch(action);
  };

  const total = items.reduce((sum, { count, price }) => {
    return sum + count * price;
  }, 0);

  const elements = items.map(({ id, name, description, count, price }) => (
    <li key={id} className={styles.row}>
      <div className={`${styles.name} ${styles.item}`}>{name}</div>
      <div className={styles.item}>{description}</div>
      <div className={`${styles.digit} ${styles.item}`}>{count}</div>
      <div className={`${styles.digit} ${styles.item}`}> {price}$</div>
      <div className={`${styles.digit} ${styles.item}`}>
        <Button onClick={() => onHandleDelete(id)}>Delete</Button>
      </div>
    </li>
  ));
  return (
    <>
      <h1 className={styles.title}>Basket</h1>
      <ul className={styles.list}>
        {elements}
        <li className={`${styles.row} ${styles.total}`}>
          <div className={`${styles.name} ${styles.item}`}>Total</div>
          <div></div>
          <div></div>
          <div className={`${styles.name} ${styles.item}`}>{total}</div>
        </li>
      </ul>
    </>
  );
};

export default BasketPage;
