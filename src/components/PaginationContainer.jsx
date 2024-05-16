import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {};
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          onClick={() => handlePageChange('prev')}
          className="btn btn-xs sm:btn-md join-item"
        >
          {'Prev'}
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md join-item border-none ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => handlePageChange(next)}
          className="btn btn-xs sm:btn-md join-item"
        >
          {'Next'}
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
