import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartID}
      className="mb-12 flex  flex-col gap-y-4 sm:flex-row flex-wrap border-b border-neutral pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      {/* INfo */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium ">{title}</h3>

        {/* COMPANY */}
        <h4 className="capitalize text-sm mt-2 text-primary">{company}</h4>
        {/* COLOR */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          Color:
          <span
            className="badge badge-sm"
            style={{
              backgroundColor: productColor,
            }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-sm">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select-base select-bordered select select-xs"
          >
            {generateAmountOptions(amount + 3)}
          </select>
        </div>
        {/* REMOVE */}

        <button className="mt-2 link-primary link-hover text-sm ">
          Remove
        </button>
        {/* PRICE */}
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
