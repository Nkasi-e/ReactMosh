export const genres = [
  { _id: "4893y903ifery9r090v9", name: "Action" },
  { _id: "4893y903ifery9r090v34", name: "Romance" },
  { _id: "4893y903ifery9r090bb8", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
