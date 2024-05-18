import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      // Amount Refers to Qty
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      state.tax = 0.18 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Items Added');
    },
    removeItem: (state, action) => console.log(action.payload),
    editItem: (state, action) => console.log(action.payload),
    clearCart: (state) => {},
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
