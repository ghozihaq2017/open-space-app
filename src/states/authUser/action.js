/**
 * @TODO: Define all the actions (creator) for the authUser state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const actionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSER_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: actionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: actionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ id, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ id, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    dispatch(hideLoading());
  };
}

export {
  actionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
