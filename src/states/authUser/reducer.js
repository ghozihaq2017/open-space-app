/**
 * @TODO: Define the reducer for the authUser state
 */

import { actionType } from './action';

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case actionType.SET_AUTH_USER:
      return action.payload.authUser;
    case actionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
