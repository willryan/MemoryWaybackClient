export function fetchMedia(query) {
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload: {
      media:
        [
          { id: 1, name: "foo.mpg", date: query.fromDate },
          { id: 2, name: "bar.jpeg", date: query.toDate }
        ],
      query,
      dbLastUpdated: '7/4/2016'
    }
  }
}

export function changeRange(range) {
  return {
    type: "CHANGE_QUERY_RANGE",
    payload: range
  }
}

export function toggleFilter(name) {
  return {
    type: "TOGGLE_FILTER",
    payload: {name}
  }
}