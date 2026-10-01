export const GENRES = [
  "Action",
  "Animation",
  "Comedy",
  "Drama",
  "Horror",
  "Science Fiction",
  "Thriller",
  "Romance",
];

export const RATING_FILTERS = [
  { label: "Any rating", value: 0 },
  { label: "9+ stars", value: 9 },
  { label: "8+ stars", value: 8 },
  { label: "7+ stars", value: 7 },
  { label: "6+ stars", value: 6 },
];

export const GENRE_COLORS = {
  Action: "bg-orange-500",
  Animation: "bg-emerald-500",
  Comedy: "bg-pink-500",
  Drama: "bg-slate-500",
  Horror: "bg-rose-800",
  "Science Fiction": "bg-indigo-500",
  Thriller: "bg-red-600",
  Romance: "bg-fuchsia-500",
};

export const genreColor = (genre) => GENRE_COLORS[genre] || "bg-gray-600";

export const EMPTY_MOVIE = {
  title: "",
  director: "",
  genre: "",
  release_year: "",
  rating: "",
  description: "",
  image: "",
};

export const FALLBACK_POSTER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="440">
      <rect width="100%" height="100%" fill="#2a2464"/>
      <text x="50%" y="50%" font-family="Poppins, sans-serif" font-size="18" fill="#a8a3cd" text-anchor="middle">No poster</text>
    </svg>`
  );
