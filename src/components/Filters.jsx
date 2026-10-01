import { GENRES, RATING_FILTERS } from "../constants";

export default function Filters({
  search,
  onSearchChange,
  activeGenre,
  onGenreChange,
  minRating,
  onMinRatingChange,
}) {
  const chips = ["All", ...GENRES];

  return (
    <div className="mt-5 space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title or director..."
          className="flex-1 rounded-full bg-[#211b52] border border-[#39316f] px-4 py-2.5 text-sm text-white placeholder-[#8b85b8] focus:outline-none focus:ring-2 focus:ring-rose-500/40"
        />
        <select
          value={minRating}
          onChange={(e) => onMinRatingChange(Number(e.target.value))}
          className="rounded-full bg-[#211b52] border border-[#39316f] px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-rose-500/40"
        >
          {RATING_FILTERS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {chips.map((genre) => {
          const isActive = genre === activeGenre;
          return (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "bg-teal-400 text-[#171240]"
                  : "bg-[#211b52] text-[#c7c2ea] border border-[#39316f] hover:bg-[#2a2464]"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
