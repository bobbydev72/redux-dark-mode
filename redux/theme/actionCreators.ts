import { SET_THEME } from './actionTypes';

export function setTheme(theme: string) {
  return { type: SET_THEME, payload: theme };
}
