import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal.length === 0) {
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
