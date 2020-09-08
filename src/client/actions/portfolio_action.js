import { SAVE_HOLDINGS, SAVE_POSITIONS } from './actionTypes';

export const saveHoldings = (holdings) => ({ type: SAVE_HOLDINGS, holdings });

export const savePositions = (positions) => ({
  type: SAVE_POSITIONS,
  positions,
});
