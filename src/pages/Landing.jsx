import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products';
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  // const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

const Landing = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </>
  );
};
export default Landing;
