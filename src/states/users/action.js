/**
 * @TODO: Define all the actions (creator) for the users state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const actionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: actionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { actionType, receiveUsersActionCreator, asyncRegisterUser };
