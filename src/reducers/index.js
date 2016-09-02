import { combineReducers } from "redux"

import results from "./resultsReducer"
import fetching from "./fetchingReducer"
import query from "./queryReducer"

export default combineReducers({
  fetching,
  results,
  query
})
