/**
 * @TODO: Define reducer for the isPreLoad state
 */

import { actionType } from './action';

function isPreLoadReducer(isPreLoad = true, action = {}) {
  switch (action.type) {
    case actionType.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreLoad;
  }
}

export default isPreLoadReducer;
