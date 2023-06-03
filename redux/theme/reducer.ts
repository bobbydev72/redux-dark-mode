import { Action } from 'redux';
import { SET_THEME } from './actionTypes';

interface SetThemeAction extends Action {
  type: typeof SET_THEME;
  payload: string;
}

const initialState = '';

// TODO: create save theme in localStorage or Cookie
// const initialState = window.localStorage.getItem('theme') || '';

export function themeReducer(
  state: string = initialState,
  action: SetThemeAction
) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;

    default:
      return state;
  }
}
