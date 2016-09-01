export default function reducer(state={
    results: {
      query: {
        fromDate: "", toDate: "",
        types: [
          {name: 'Video', include: true},
          {name: 'Photo', include: true}
        ]
      },
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
      // TODO combine reducer so date-range deals more cleanly with query state
      case "CHANGE_QUERY_RANGE": {
        return {
          ...state,
          results: {
            ...state.results,
            query: {
              ...state.results.query,
              fromDate: action.payload.from,
              toDate: action.payload.to
            }
          }
        }
      }
      case "TOGGLE_FILTER": {
        const curTypes = state.results.query.types;
        const toggledTypes = curTypes.map(t => {
          if (action.payload.name === t.name) {
            return {...t, include: !t.include}
          } else {
            return t
          }
        })
        return {
          ...state,
          results: {
            ...state.results,
            query: {
              ...state.results.query,
              types: toggledTypes
            }
          }
        }
      }
      default:
    }

    return state
}
