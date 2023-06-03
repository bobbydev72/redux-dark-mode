import { combineReducers, createStore } from 'redux';
import { themeReducer } from './theme/reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer);
