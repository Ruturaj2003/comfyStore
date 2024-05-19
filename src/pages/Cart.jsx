import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0)
    <SectionTitle text={'Your Cart is Empty'}></SectionTitle>;

  return (
    <>
      <SectionTitle text={'Shopping Cart'}></SectionTitle>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList></CartItemsList>
        </div>
        <div className="lg:col-span-4">
          <CartTotals></CartTotals>
          {user ? (
            <Link to={'/checkout'} className="btn btn-primary btn-block mt-8 ">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to={'/login'} className="btn btn-primary btn-block mt-8">
              Please Log In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
