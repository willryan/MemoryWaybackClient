import moment from 'moment';

export default function reducer(state={
    fromDate: moment().subtract(1, 'year').subtract(2, 'days'),
    toDate: moment().subtract(1, 'year').add(2, 'days'),
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
