export function fetchMedia() {
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload: {
      media:
        [
          { id: 1, name: "foo.mpg", date: '5/15/2014' },
          { id: 2, name: "bar.jpeg", date: '11/25/2012' }
        ],
      query: {
        fromDate: '1/18/1981', toDate: '8/30/2016',
        types: [
          {name: 'Video', include: true},
          {name: 'Photo', include: true}
        ]
      },
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