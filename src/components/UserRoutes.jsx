import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
// import ProductsPage from 'pages/ProductsPage/ProductsPage';
// import BasketPage from 'pages/BasketPage/BasketPage';
// import HomePage from 'pages/HomePage/HomePage';

const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const BasketPage = lazy(() => import('../pages/BasketPage/BasketPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<>Load</>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
