import { combineReducers } from 'redux';

import dropdownReducer from './dropdown.reducer';

export default combineReducers({
  dropdown: dropdownReducer,
});
