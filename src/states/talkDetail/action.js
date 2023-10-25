/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const actionType = {
  RECEIVE_TALK_DETAIL: 'RECEIVE_TALK_DETAIL',
  CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
  TOGGLE_LIKE_TALK_DETAIL: 'TOGGLE_LIKE_TALK_DETAIL',
};

function receiveTalkDetailActionCreator(talkDetail) {
  return {
    type: actionType.RECEIVE_TALK_DETAIL,
    payload: {
      talkDetail,
    },
  };
}

function clearTalkDetailActionCreator() {
  return {
    type: actionType.CLEAR_TALK_DETAIL,
  };
}

function toggleLikeTalkActionCreator(userId) {
  return {
    type: actionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveTalkDetail(talkId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearTalkDetailActionCreator());
    try {
      const talkDetail = await api.getTalkDetail(talkId);
      dispatch(receiveTalkDetailActionCreator(talkDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleLikeTalkDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeTalkActionCreator(authUser.id));

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeTalkActionCreator(authUser.id));
    }
    dispatch(hideLoading());
  };
}

export {
  actionType,
  clearTalkDetailActionCreator,
  receiveTalkDetailActionCreator,
  toggleLikeTalkActionCreator,
  asyncReceiveTalkDetail,
  asyncToggleLikeTalkDetail,
};
