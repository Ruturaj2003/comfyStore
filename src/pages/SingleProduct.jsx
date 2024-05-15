import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { useState } from 'react';

export const loader = async ({ params }) => {
  const url = '/products/';
  const id = params.id;
  const response = await customFetch(url + id);

  return {
    product: response.data.data,
  };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const inrAmount = formatPrice(price);

  return <div>SingleProduct</div>;
};
export default SingleProduct;
