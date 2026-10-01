import ModalWrapper from "./ModalWrapper";
import { FALLBACK_POSTER } from "../constants";

export default function MovieDetail({ movie, onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex gap-4">
        <img
          src={movie.image || FALLBACK_POSTER}
          alt={movie.title}
          className="w-24 h-36 object-cover rounded-lg shrink-0 bg-[#2a2464]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_POSTER;
          }}
        />
        <div>
          <h2 className="font-display font-bold text-lg text-white">
            {movie.title}
          </h2>
          <p className="text-sm text-[#c7c2ea] mt-2">
            Director: {movie.director}
          </p>
          <p className="text-sm text-[#c7c2ea]">Genre: {movie.genre}</p>
          <p className="text-sm text-[#c7c2ea]">Year: {movie.release_year}</p>
          <p className="text-sm text-amber-400 font-semibold mt-1">
            ★ {movie.rating} / 10
          </p>
        </div>
      </div>

      {movie.description && (
        <p className="text-sm text-[#c7c2ea] mt-4 leading-relaxed">
          {movie.description}
        </p>
      )}

      <div className="flex justify-end mt-5">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-full border border-[#39316f] text-sm text-[#c7c2ea] cursor-pointer"
        >
          Close
        </button>
      </div>
    </ModalWrapper>
  );
}
