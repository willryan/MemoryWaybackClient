export default function reducer(state={
    media: null
  }, action) {
    switch (action.type) {
      case "SET_SELECTED_MEDIA": {
        return {media: action.payload.media}
      }
      default:
    }
    return state
}