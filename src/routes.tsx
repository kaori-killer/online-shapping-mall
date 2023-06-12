import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductListPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
      // { path: '/cart', element: <CartPage /> },
    ],
  },
];

export default routes;
