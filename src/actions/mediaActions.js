export function fetchMedia() {
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload: [
      { id: 1, name: "foo.jpg" },
      { id: 2, name: "bar.jpg" }
    ]
  }
}
