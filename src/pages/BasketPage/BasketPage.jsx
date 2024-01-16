import css from './basket-page.module.css';

import Basket from 'components/Basket/Basket';

const BasketPage = () => {
  return (
    <>
      <div className={css.title}>Basket</div>
      <Basket />
    </>
  );
};

export default BasketPage;
