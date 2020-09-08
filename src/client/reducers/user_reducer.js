import { SAVE_USER_TOKEN } from '../actions/actionTypes';

const initialState = {
  appToken: '',
};

const saveToken = (state, { token }) => ({
  ...state,
  appToken: token,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return saveToken(state, action);

    default:
      return state;
  }
};

export default userReducer;
