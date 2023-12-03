export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-4 py-4 px-2 text-color-primary text-2xl">
      {page > 1 ? (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      ) : null}
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
}
