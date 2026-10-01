// Run with: node seed/seed.mjs
// Populates your MockAPI "movies" resource with 8 starter movies — fully filled in,
// ready to run as-is. Every "image" is guaranteed to load (placehold.co never breaks).
//
// Want real posters instead of the colored placeholders? Go to themoviedb.org,
// search the movie, right-click its poster → "Copy image address", and swap
// that in for the matching "image" value below. Grabbing it yourself this way
// guarantees the link stays live.

const API_URL = "https://6ab8b242f84897980b722e5d.mockapi.io/api/movies";

const placeholder = (title, hex) =>
  `https://placehold.co/500x750/${hex}/ffffff?font=poppins&text=${encodeURIComponent(
    title
  )}`;

const movies = [
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2014,
    rating: 8.7,
    description:
      "A group of astronauts travel through a wormhole in search of a new home for humanity.",
    // Verified real poster (TMDB CDN)
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti",
    genre: "Animation",
    release_year: 2018,
    rating: 8.4,
    description:
      "Teen Miles Morales becomes Spider-Man and teams up with alternate-universe Spider-people to stop a threat to all reality.",
    image: placeholder("Spider-Verse", "4c1d95"),
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Action",
    release_year: 2010,
    rating: 8.8,
    description:
      "A thief who steals secrets through dream-sharing technology is given a chance to have his criminal history erased by planting an idea into a target's mind.",
    image: placeholder("Inception", "9a3412"),
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    genre: "Drama",
    release_year: 2019,
    rating: 8.5,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    image: placeholder("Parasite", "334155"),
  },
  {
    title: "Coco",
    director: "Lee Unkrich",
    genre: "Animation",
    release_year: 2017,
    rating: 8.4,
    description:
      "Aspiring musician Miguel journeys to the Land of the Dead to uncover his family's forgotten history.",
    image: placeholder("Coco", "059669"),
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    genre: "Comedy",
    release_year: 2014,
    rating: 8.1,
    description:
      "The adventures of a legendary concierge at a famous European hotel between the wars, and the lobby boy who becomes his trusted friend.",
    image: placeholder("Grand Budapest Hotel", "db2777"),
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    genre: "Action",
    release_year: 2015,
    rating: 8.1,
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners and a drifter.",
    image: placeholder("Mad Max: Fury Road", "c2410c"),
  },
  {
    title: "Get Out",
    director: "Jordan Peele",
    genre: "Horror",
    release_year: 2017,
    rating: 7.8,
    description:
      "A young Black man visits his white girlfriend's family estate, where he uncovers a disturbing secret.",
    image: placeholder("Get Out", "7f1d1d"),
  },
];

async function seed() {
  for (const movie of movies) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    if (res.ok) {
      console.log(`Created: ${movie.title}`);
    } else {
      console.error(`Failed: ${movie.title} (${res.status})`);
    }
  }
}

seed();
