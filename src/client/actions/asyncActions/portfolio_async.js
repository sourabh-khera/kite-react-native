import { saveHoldings, savePositions } from '../../actions/portfolio_action';
import { receiveAPI, requestAPI } from '../common_action';
import { webApiGet } from '../../services/webBaseApi';

export const getHoldings = () => async (dispatch) => {
  try {
    dispatch(requestAPI(true));
    const response = await webApiGet('/portfolio/holdings').request;
    dispatch(receiveAPI(false));
    const {
      data: { data },
      status,
    } = response;
    if (status === 200) {
      dispatch(saveHoldings(data.holdings));
    }
  } catch (error) {
    dispatch(receiveAPI(false));
    if (error && error.response && error.response.data) {
      console.log(error);
    }
  }
};

export const getPositions = () => async (dispatch) => {
  try {
    dispatch(requestAPI(true));
    const response = await webApiGet('/portfolio/positions').request;
    dispatch(receiveAPI(false));
    const {
      data: { data },
      status,
    } = response;
    if (status === 200) {
      dispatch(savePositions(data.positions));
    }
  } catch (error) {
    dispatch(receiveAPI(false));
    if (error && error.response && error.response.data) {
      console.log(error);
    }
  }
};
