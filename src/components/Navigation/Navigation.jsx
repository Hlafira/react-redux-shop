import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getTotalCount, getTotalPrice } from '../../redux/selectors';
import styles from './navigation.module.css';

import { items } from './items';

const Navigation = () => {
  const logoPath = process.env.PUBLIC_URL + '/logo192.png';
  const elements = items.map(({ id, text, path }) => (
    <li key={id}>
      <NavLink className={styles.link} to={path}>
        {text}
      </NavLink>
    </li>
  ));
  // const { price, count } = useSelector(totalBasket);
  const count = useSelector(getTotalCount);
  const price = useSelector(getTotalPrice);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={logoPath} alt="Logo" />
        </Link>

        <ul className={styles.nav}>{elements}</ul>
        <div className={styles.total}>
          <span>Total </span> <span className={styles.val}>{count}</span>-{' '}
          <span className={styles.val}>{price}$</span>
        </div>
      </header>
    </>
  );
};

export default Navigation;
