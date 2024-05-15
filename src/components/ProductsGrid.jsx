import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            className="card shadow shadow-neutral w-full hover:shadow-2xl hover:shadow-green-400 transition duration-300"
            to={'/products/' + product.id}
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 w-full md:h-48 object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className=" card-title capitalize tracking-widest">
                {title}
              </h2>

              <span className="text-secondary">{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
