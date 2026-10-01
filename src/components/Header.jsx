export default function Header({ onAddClick }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="font-display font-extrabold text-3xl text-white">
          My{" "}
          <span className="bg-amber-400 text-[#171240] px-2 rounded-md">
            Movie
          </span>{" "}
          Shelf
        </h1>
        <p className="text-[#a8a3cd] mt-1.5 text-sm">
          Keep track of everything you've watched and loved.
        </p>
      </div>

      <button
        onClick={onAddClick}
        className="shrink-0 bg-rose-500 hover:bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer"
      >
        + Add movie
      </button>
    </div>
  );
}
