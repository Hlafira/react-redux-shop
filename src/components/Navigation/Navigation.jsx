import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getTotalCount, getTotalPrice } from '../../redux/selectors';

import css from './navigation.module.css';

import { items } from './items';

const Navigation = () => {
  const logoPath = process.env.PUBLIC_URL + '/logo192.png';
  const elements = items.map(({ id, text, path }) => (
    <li key={id}>
      <NavLink className={css.link} to={path}>
        {text}
      </NavLink>
    </li>
  ));

  const count = useSelector(getTotalCount);
  const price = useSelector(getTotalPrice);

  return (
    <>
      <header className={css.header}>
        <Link to="/">
          <img className={css.logo} src={logoPath} alt="Logo" />
        </Link>
        <ul className={css.nav}>{elements}</ul>
        <div className={css.total}>
          <span>Total </span> <span className={css.val}>{count}</span>-{' '}
          <span className={css.val}>{price}$</span>
        </div>
      </header>
    </>
  );
};

export default Navigation;
