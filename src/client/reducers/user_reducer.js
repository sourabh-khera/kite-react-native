import { SAVE_USER_TOKEN } from '../actions/actionTypes';

const initialState = {
  authenticated: true,
  accessToken: '',
  userAdded: true,
};

const saveToken = (state, { token }) => ({ ...state, accessToken: token });

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return saveToken(state, action);

    default:
      return state;
  }
};

export default userReducer;
