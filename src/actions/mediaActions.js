export function fetchMedia() {
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload: [
      { id: 1, name: "foo.mpg" },
      { id: 2, name: "bar.jpeg" }
    ]
  }
}
