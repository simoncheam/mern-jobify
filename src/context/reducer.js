import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

//! Reducer handles action types

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'please provide all values',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  throw new Error(` no such action: ${action.type}`);
};

export default reducer;
