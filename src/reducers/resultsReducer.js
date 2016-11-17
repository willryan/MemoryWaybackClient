export default function reducer(state={
    query: {
      fromDate: "", toDate: "",
      types: [
        {name: 'Video', include: true},
        {name: 'Photo', include: true}
      ]
    },
    dbLastUpdated: undefined,
    results: []
  }, action) {

    switch (action.type) {
      case "FETCH_MEDIA_FULFILLED": {
        return action.payload
      }
      default:
    }

    return state
}
