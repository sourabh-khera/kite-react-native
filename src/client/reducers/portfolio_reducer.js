import { SAVE_HOLDINGS, SAVE_POSITIONS } from '../actions/actionTypes';

const initialState = {
  holdings: [],
  positions: {},
};

const saveHoldings = (state, { holdings }) => ({ ...state, holdings });

const savePositions = (state, { positions }) => ({ ...state, positions });

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_HOLDINGS:
      return saveHoldings(state, action);
    case SAVE_POSITIONS:
      return savePositions(state, action);

    default:
      return state;
  }
};

export default portfolioReducer;
