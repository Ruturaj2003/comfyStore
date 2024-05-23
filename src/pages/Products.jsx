import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // const search = params.get('search');
    // const response = await customFetch(url, { params: params });

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;
    return {
      products: products,
      meta: meta,
      params: params,
    };
  };

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
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
