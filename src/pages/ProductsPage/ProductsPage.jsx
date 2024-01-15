import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getProducts } from 'shared/products-api';
import ProductsList from 'components/ProductsList/ProductsList';
// import { addBasket } from '../../redux/actions';
import { addBasket } from '../../redux/basket/basket-slice';
import { getBasket } from '../../redux/selectors';
import { showWarnNotification } from '../../shared/notifictions';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();

        setProducts(products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();
  const addProduct = product => {
    if (isProductInBasket(product.id)) {
      showWarnNotification(
        "This product already in basket. You can't add this more than one time!"
      );
    } else {
      const action = addBasket(product);
      dispatch(action);
    }
  };

  const basketList = useSelector(getBasket);
  const isProductInBasket = newId => {
    return Boolean(basketList.find(({ id }) => newId === id));
  };

  return (
    <>
      <ProductsList items={products} onAddProduct={addProduct} />
    </>
  );
};

export default ProductsPage;
