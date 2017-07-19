import axios from 'axios';

const getProfilesURL = '/profiles'

const initialState = {
  profiles: {}
}

//Action Types

const GET_PROFILES = 'GET_PROFILES';

//Reducer

export default function profileReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_PROFILES}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {profile: [...action.payload]});

    default: return state;
  }
}

export function getProfiles() {
  console.log('getting profile...')
  const promise = axios.get(getProfilesURL).then(res => {
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_PROFILES,
    payload: promise
  }
}