import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  // const search = params.get('search');
  const response = await customFetch(url, { params: params });
  const products = response.data.data;
  const meta = response.data.meta;
  return {
    products: products,
    meta: meta,
    params: params,
  };
};

const Products = () => {
  return (
    <>
      <Filters></Filters>
      <ProductsContainer></ProductsContainer>
      <PaginationContainer></PaginationContainer>
    </>
  );
};
export default Products;
