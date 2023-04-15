import { createStore } from 'redux';

import { Modif, Supr } from '/actions.js';




function UserReducer(state, action) {
  switch (action.type) {
    case 'Modif':
      return ({...state,first_name:action.first_name, last_name:action.last_name});
    case 'Supr':
      return { };
    default:
      return state;
  }
}


export default UserReducer;