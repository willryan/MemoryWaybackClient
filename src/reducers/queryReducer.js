export default function reducer(state={
    fromDate: "1/1/2015", toDate: "12/31/2016",
    types: [
      {name: 'Video', include: true},
      {name: 'Photo', include: true}
    ]
  }, action) {

    switch (action.type) {
      case "CHANGE_QUERY_RANGE": {
        return {
          ...state,
          fromDate: action.payload.from,
          toDate: action.payload.to
        }
      }
      case "TOGGLE_FILTER": {
        const curTypes = state.types;
        const toggledTypes = curTypes.map(t => {
          if (action.payload.name === t.name) {
            return {...t, include: !t.include}
          } else {
            return t
          }
        })
        return {
          ...state,
          types: toggledTypes
        }
      }
      default:
    }

    return state
}
