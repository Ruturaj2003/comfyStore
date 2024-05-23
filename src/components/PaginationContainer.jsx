import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navi = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navi(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;

  const renderPageButtons = () => {
    const pageButtons = [];
    const pageRange = 2; // Number of pages to show around the current page

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= page - pageRange && i <= page + pageRange)
      ) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`btn btn-xs sm:btn-md join-item border-none ${
              i === page ? 'bg-base-300 border-base-300' : ''
            }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === page - pageRange - 1 && page - pageRange > 1) ||
        (i === page + pageRange + 1 && page + pageRange < pageCount)
      ) {
        pageButtons.push(
          <span key={i} className="btn btn-xs sm:btn-md join-item">
            ...
          </span>
        );
      }
    }

    return pageButtons;
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="btn btn-xs sm:btn-md join-item"
          disabled={page === 1}
        >
          {'Prev'}
        </button>
        {renderPageButtons()}
        <button
          onClick={() => handlePageChange(page + 1)}
          className="btn btn-xs sm:btn-md join-item"
          disabled={page === pageCount}
        >
          {'Next'}
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
