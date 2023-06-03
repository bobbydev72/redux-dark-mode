import { SET_THEME } from './actionTypes';

export function setTheme(theme: string) {
  // TODO: create save theme in localStorage or Cookie
  // window.localStorage.setItem('theme', theme);

  return { type: SET_THEME, payload: theme };
}
