# Movie Collection Management

A React + Vite + Tailwind app for managing a personal movie collection, backed by MockAPI (CRUD: GET/POST/PUT/DELETE).

(The in-app header still shows "My Movie Shelf" as the product name, matching the reference UI screenshots — only the project/package name changed. Let me know if you want the on-screen title changed too.)

## Setup

1. In your existing MockAPI project (`6ab8b242f84897980b722e5d`), click **New resource** and create one called `movies` with fields:
   `title` (String), `director` (String), `genre` (String), `release_year` (Number), `rating` (Number), `description` (String), `image` (String).
2. Install dependencies and run:
   ```bash
   pnpm install
   pnpm dev
   ```

## Seeding 8 starter movies

The case study asks for at least 8 movies in MockAPI before submitting. `seed/seed.mjs` is fully filled in and ready to run as-is — no editing required:

```bash
node seed/seed.mjs
```

This POSTs 8 movies (Interstellar, Spider-Man: Into the Spider-Verse, Inception, Parasite, Coco, The Grand Budapest Hotel, Mad Max: Fury Road, Get Out) to your MockAPI `movies` endpoint, each with title/director/genre/year/rating/description already filled in.

**About the posters:** Interstellar uses a real poster. The other 7 use colored placeholder images (via placehold.co) labeled with the movie title, since borrowed poster links can get hotlink-blocked and break later. To swap in real posters: go to [themoviedb.org](https://www.themoviedb.org), search the movie, right-click its poster → **Copy image address**, then replace that movie's `image` value in `seed/seed.mjs` (or just edit it directly in MockAPI / the app's Edit form afterward) and re-seed or update.

## Features

- **List** — grid of movie cards with poster, rating badge, genre tag, title, director, year.
- **Search** — filter by title or director.
- **Genre filter** — chip buttons (Action, Animation, Comedy, Drama, Horror, Science Fiction, etc.).
- **Rating filter** — dropdown (Any / 9+ / 8+ / 7+ / 6+ stars).
- **Add / Edit** — modal form with validation on all required fields, plus an image preview.
- **Details** — modal showing full movie info.
- **Delete** — confirmation modal before removing.
- **Loading & error states** — spinner while fetching, message if the request fails.

## Components

- `App.jsx` — state, data fetching, filtering logic.
- `components/Header.jsx` — title + Add movie button.
- `components/Filters.jsx` — search box, genre chips, rating dropdown.
- `components/MovieList.jsx` — grid + loading/error/empty states.
- `components/MovieCard.jsx` — a single movie card.
- `components/MovieForm.jsx` — shared Add/Edit form.
- `components/MovieDetail.jsx` — detail modal.
- `components/ConfirmDeleteModal.jsx` — delete confirmation.
- `components/ModalWrapper.jsx` — shared modal shell.
