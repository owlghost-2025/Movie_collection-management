import { genreColor, FALLBACK_POSTER } from "../constants";

export default function MovieCard({ movie, onDetails, onEdit, onDelete }) {
  return (
    <div className="bg-[#221c54] rounded-xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative aspect-[2/3] bg-[#2a2464]">
        {movie.rating !== "" && movie.rating != null && (
          <span className="absolute top-2 right-2 bg-amber-400 text-[#171240] text-[11px] font-bold px-2 py-1 rounded-full">
            ★ {movie.rating}
          </span>
        )}

        <img
          src={movie.image || FALLBACK_POSTER}
          alt={movie.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_POSTER;
          }}
        />

        {movie.genre && (
          <span
            className={`absolute -bottom-2.5 left-3 ${genreColor(
              movie.genre
            )} text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow`}
          >
            {movie.genre}
          </span>
        )}
      </div>

      <div className="p-3.5 pt-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-sm text-white leading-snug">
          {movie.title}
        </h3>
        <p className="text-[12px] text-[#a8a3cd] mt-1">
          {movie.director} · {movie.release_year}
        </p>

        <div className="flex gap-1.5 mt-3">
          <button
            onClick={() => onDetails(movie)}
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-[#171240] rounded-full py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
          >
            Details
          </button>
          <button
            onClick={() => onEdit(movie)}
            className="flex-1 bg-[#3a3480] hover:bg-[#453da0] text-white rounded-full py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(movie)}
            className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-full py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
