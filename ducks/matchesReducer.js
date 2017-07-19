import axios from 'axios';

const getMatchesURL = '/matches'

const initialState = {
  matches: {}
}

//Action Types

const GET_MATCHES = 'GET_MATCHES';

//Reducer

export default function matchesReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_MATCHES}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {matches: [...action.payload]});

    default: return state;
  }
}

export function getMatches() {
  console.log('getting matches...')
  const promise = axios.get(getMatchesURL).then(res => {
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_MATCHES,
    payload: promise
  }
}