export default function reducer(state={
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
          fetched: true
        }
      }
      default:
    }

    return state
}
