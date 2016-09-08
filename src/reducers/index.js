import { combineReducers } from "redux"

import results from "./resultsReducer"
import fetching from "./fetchingReducer"
import query from "./queryReducer"
import selectedMedia from "./selectedMediaReducer"

export default combineReducers({
  fetching,
  results,
  query,
  selectedMedia
})
