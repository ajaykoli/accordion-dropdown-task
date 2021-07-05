import { createSlice } from '@reduxjs/toolkit'
import { get } from "lodash";
const _ = { get };

// Initial state for reducer
const initialState = {};

const slice = createSlice({
  name: 'dropdown',
  initialState: initialState,
  reducers: {

    setDropdownValueRequest: (state, payload) => {
      return {
        ...state,
        ...payload.payload
      };
    },
  }
});

// Actions
export const { setDropdownValueRequest } = slice.actions;

// Reducers
export default slice.reducer;
