import axios from "axios";

export function fetchMedia(query) {
  const types = query.types.filter(t => t.include).map(t => t.name);
  const fromDate = new Date(query.fromDate);
  const toDate = new Date(query.toDate);
  return dispatch => {
    dispatch({
      type: "FETCH_MEDIA",
      payload: {}
    })
    axios.get("/api/media-query")
      .then(resp => {
        dispatch({
          type: "FETCH_MEDIA_FULFILLED",
          payload: resp.data
        })
      });
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

export function setSelectedMedia(media) {
  return {
    type: "SET_SELECTED_MEDIA",
    payload: {media}
  }
}