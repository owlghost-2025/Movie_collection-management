import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { GENRES, EMPTY_MOVIE } from "../constants";

const inputClass =
  "w-full rounded-lg bg-[#171240] border border-[#39316f] px-3 py-2 text-sm text-white placeholder-[#6f699c] focus:outline-none focus:ring-2 focus:ring-rose-500/40";

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#c7c2ea] mb-1">
        {label}
      </label>
      {children}
      {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function MovieForm({ movie, saving, onClose, onSubmit }) {
  const [form, setForm] = useState(
    movie
      ? {
          title: movie.title || "",
          director: movie.director || "",
          genre: movie.genre || "",
          release_year: movie.release_year ?? "",
          rating: movie.rating ?? "",
          description: movie.description || "",
          image: movie.image || "",
        }
      : EMPTY_MOVIE
  );
  const [errors, setErrors] = useState({});

  const setField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Title is required.";
    if (!form.director.trim()) next.director = "Director is required.";
    if (!form.genre.trim()) next.genre = "Genre is required.";
    if (form.release_year === "" || Number.isNaN(Number(form.release_year))) {
      next.release_year = "Release year must be a number.";
    }
    if (
      form.rating === "" ||
      Number.isNaN(Number(form.rating)) ||
      Number(form.rating) < 0 ||
      Number(form.rating) > 10
    ) {
      next.rating = "Rating must be a number between 0 and 10.";
    }
    if (!form.description.trim()) next.description = "Description is required.";
    if (!form.image.trim()) next.image = "Image URL is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      title: form.title.trim(),
      director: form.director.trim(),
      genre: form.genre.trim(),
      release_year: Number(form.release_year),
      rating: Number(form.rating),
      description: form.description.trim(),
      image: form.image.trim(),
    });
  };

  return (
    <ModalWrapper onClose={onClose}>
      <h2 className="font-display font-bold text-xl text-white mb-4">
        {movie ? "Edit movie" : "Add a movie"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <Field label="Title" error={errors.title}>
          <input
            type="text"
            value={form.title}
            onChange={setField("title")}
            placeholder="e.g. Interstellar"
            className={inputClass}
          />
        </Field>

        <Field label="Director" error={errors.director}>
          <input
            type="text"
            value={form.director}
            onChange={setField("director")}
            className={inputClass}
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Genre" error={errors.genre}>
            <input
              type="text"
              list="genre-options"
              value={form.genre}
              onChange={setField("genre")}
              placeholder="Pick or type"
              className={inputClass}
            />
            <datalist id="genre-options">
              {GENRES.map((g) => (
                <option key={g} value={g} />
              ))}
            </datalist>
          </Field>
          <Field label="Release year" error={errors.release_year}>
            <input
              type="number"
              value={form.release_year}
              onChange={setField("release_year")}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Rating (0–10)" error={errors.rating}>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={form.rating}
            onChange={setField("rating")}
            className={inputClass}
          />
        </Field>

        <Field label="Description" error={errors.description}>
          <textarea
            value={form.description}
            onChange={setField("description")}
            rows={3}
            className={inputClass}
          />
        </Field>

        <Field label="Image URL" error={errors.image}>
          <div className="flex gap-3">
            <input
              type="text"
              value={form.image}
              onChange={setField("image")}
              placeholder="https://images.unsplash.com/..."
              className={inputClass}
            />
            <div className="w-14 h-18 shrink-0 bg-[#171240] border border-dashed border-[#39316f] rounded-lg overflow-hidden">
              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </div>
          </div>
        </Field>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#39316f] text-sm text-[#c7c2ea] cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold disabled:opacity-60 cursor-pointer"
          >
            {saving ? "Saving…" : movie ? "Save changes" : "Add movie"}
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
}
