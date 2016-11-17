import axios from "axios";
import queryString from "query-string";

export function fetchMedia(query) {
  const types = query.types.filter(t => t.include).map(t => t.name);
  const from = new Date(query.fromDate).toISOString();
  const to = new Date(query.toDate).toISOString();
  const params = queryString.stringify({from, to, types});
  return dispatch => {
    dispatch({
      type: "FETCH_MEDIA",
      payload: {}
    })
    axios.get(`/api/media-query?${params}`)
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