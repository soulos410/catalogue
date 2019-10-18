import { combineReducers } from 'redux';
import {
  items, itemsHasErrored, itemsIsLoading, currentPage,
} from './items';

export const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  currentPage,
});
