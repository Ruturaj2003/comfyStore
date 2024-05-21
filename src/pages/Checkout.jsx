import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be Logged In to Checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems.length === 0) {
    return <SectionTitle text={'Your Cart is Empty '}></SectionTitle>;
  }

  return (
    <>
      <SectionTitle text={'Place your order'}></SectionTitle>
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm></CheckoutForm>
        <CartTotals></CartTotals>
      </div>
    </>
  );
};
export default Checkout;
