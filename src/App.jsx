import { useEffect, useMemo, useState } from "react";
import api from "./api";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import MovieDetail from "./components/MovieDetail";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [minRating, setMinRating] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [viewingMovie, setViewingMovie] = useState(null);
  const [deletingMovie, setDeletingMovie] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get("/movies");
      setMovies(response.data);
    } catch {
      setError("Could not load movies. Check the MockAPI endpoint in api.js.");
    } finally {
      setLoading(false);
    }
  }

  const filteredMovies = useMemo(() => {
    const term = search.trim().toLowerCase();
    return movies.filter((movie) => {
      const matchesSearch =
        !term ||
        movie.title?.toLowerCase().includes(term) ||
        movie.director?.toLowerCase().includes(term);
      const matchesGenre = activeGenre === "All" || movie.genre === activeGenre;
      const matchesRating = Number(movie.rating) >= minRating;
      return matchesSearch && matchesGenre && matchesRating;
    });
  }, [movies, search, activeGenre, minRating]);

  async function handleFormSubmit(payload) {
    setSaving(true);
    try {
      if (editingMovie) {
        const response = await api.put(`/movies/${editingMovie.id}`, payload);
        setMovies((prev) =>
          prev.map((m) => (m.id === editingMovie.id ? response.data : m))
        );
      } else {
        const response = await api.post("/movies", payload);
        setMovies((prev) => [...prev, response.data]);
      }
      setShowForm(false);
      setEditingMovie(null);
    } catch {
      alert("Something went wrong while saving the movie. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteConfirm() {
    if (!deletingMovie) return;
    try {
      await api.delete(`/movies/${deletingMovie.id}`);
      setMovies((prev) => prev.filter((m) => m.id !== deletingMovie.id));
    } catch {
      alert("Could not delete the movie. Please try again.");
    } finally {
      setDeletingMovie(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#171240] px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <Header
          onAddClick={() => {
            setEditingMovie(null);
            setShowForm(true);
          }}
        />

        <Filters
          search={search}
          onSearchChange={setSearch}
          activeGenre={activeGenre}
          onGenreChange={setActiveGenre}
          minRating={minRating}
          onMinRatingChange={setMinRating}
        />

        <MovieList
          movies={filteredMovies}
          loading={loading}
          error={error}
          onDetails={setViewingMovie}
          onEdit={(movie) => {
            setEditingMovie(movie);
            setShowForm(true);
          }}
          onDelete={setDeletingMovie}
        />
      </div>

      {showForm && (
        <MovieForm
          movie={editingMovie}
          saving={saving}
          onClose={() => {
            setShowForm(false);
            setEditingMovie(null);
          }}
          onSubmit={handleFormSubmit}
        />
      )}

      {viewingMovie && (
        <MovieDetail movie={viewingMovie} onClose={() => setViewingMovie(null)} />
      )}

      {deletingMovie && (
        <ConfirmDeleteModal
          movie={deletingMovie}
          onCancel={() => setDeletingMovie(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}
