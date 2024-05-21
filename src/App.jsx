import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './pages';
import { ErrorElement } from './components';

// Loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';

// Actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkOutAction } from './components/CheckoutForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement></ErrorElement>,
      },
      { path: 'products', element: <Products />, loader: productsLoader },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkOutAction(store),
      },
      { path: 'orders', element: <Orders /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
