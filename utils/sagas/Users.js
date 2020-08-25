import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersSuccess } from '../actions/Users';
import { FETCH_ALL_USERS } from '../constants/ActionTypes';

const getUsers = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=50`);
  const post = await res.json();
  return post.results;
};

function* fetchUsersRequest() {
  try {
    const fetchedUsers = yield call(getUsers);
    yield put(fetchUsersSuccess(fetchedUsers));
  } catch (error) {
    yield put(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_ALL_USERS, fetchUsersRequest)]);
}
