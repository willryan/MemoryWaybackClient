export default function reducer(state={
    results: {
      query: { fromDate: "", toDate: "", types: ['Video', 'Photo']},
      dbLastUpdated: undefined,
      media: []
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MEDIA": {
        return {...state, fetching: true}
      }
      case "FETCH_MEDIA_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_MEDIA_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          results: action.payload,
        }
      }
      default:
    }

    return state
}
