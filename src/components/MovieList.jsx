import MovieCard from "./MovieCard";

export default function MovieList({
  movies,
  loading,
  error,
  onDetails,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="border-2 border-dashed border-[#39316f] rounded-xl py-16 flex flex-col items-center gap-3 mt-5">
        <div className="w-8 h-8 border-4 border-[#39316f] border-t-rose-500 rounded-full animate-spin" />
        <p className="text-[#a8a3cd] text-sm font-medium">Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-2 border-dashed border-rose-500/40 rounded-xl py-16 flex items-center justify-center mt-5">
        <p className="text-rose-400 text-sm">{error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="border-2 border-dashed border-[#39316f] rounded-xl py-16 flex items-center justify-center mt-5">
        <p className="text-[#a8a3cd] text-sm">
          No movies match your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDetails={onDetails}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
