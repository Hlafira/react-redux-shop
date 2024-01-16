import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getProducts } from 'shared/products-api';
import ProductsList from 'components/ProductsList/ProductsList';

import { addBasket } from '../../redux/basket/basket-slice';

import { showSuccessNotification } from '../../shared/notifictions';

import css from './products-page.module.css';

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
    showSuccessNotification(`${product.name} added in basket`);
    dispatch(addBasket(product));
  };

  return (
    <>
      <div className={css.title}>Products</div>
      <ProductsList items={products} onAddProduct={addProduct} />
    </>
  );
};

export default ProductsPage;
