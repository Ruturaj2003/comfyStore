import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          {' '}
          <h4
            className="text-center font-bold text-9xl
				text-primary
				"
          >
            404
          </h4>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Looks like we're in the land of the lost webpages.
          </p>
          <div className="mt-10">
            <Link to="/" className=" btn btn-secondary">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">
        Well, isn't this just a lovely surprise! Our code decided to take a nap.
      </h4>
    </main>
  );
};
export default Error;
