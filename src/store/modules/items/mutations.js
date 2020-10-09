import { defaultState } from '@/store/modules/items/state';

export const SET_ITEMS = 'SET_ITEMS';
export const SET_LOADING = 'SET_LOADING';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RESET_STATE = 'RESET_STATE';

export default {
  [SET_ITEMS] (state, items) {
    state.items = items;
  },
  [SET_LOADING] (state, status) {
    state.itemsLoading = status
  },
  [ADD_NEW_ITEM] (state, newItem) {
    state.items.push(newItem);
  },
  [DELETE_ITEM] (state, id) {
    state.items = state.items.filter(item => item.id !== id);
  },
  [RESET_STATE] (state) {
    Object.assign(state, defaultState())
  }
}
