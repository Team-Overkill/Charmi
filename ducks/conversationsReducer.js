import axios from 'axios';

const getConversationsURL = '/conversations'

const initialState = {
  conversations: {}
}

//Action Types

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';

//Reducer

export default function conversationsReducer( state = initialState, action) {
  switch (action.type) {
    case `${GET_CONVERSATIONS}_FULFILLED`:
      console.log(action.payload)
      return Object.assign({}, state, {conversations: [...action.payload]});

    default: return state;
  }
}

export function getConversations() {
  console.log('getting conversations...')
  const promise = axios.get(getConversationsURL).then(res => {
    return res.data
  }).catch(err => console.log(err))
  return {
    type: GET_CONVERSATIONS,
    payload: promise
  }
}