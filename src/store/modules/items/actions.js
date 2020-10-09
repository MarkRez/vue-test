import {SET_ITEMS, SET_LOADING } from '@/store/modules/items/mutations';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export default {
  async [FETCH_ITEMS]({ commit }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const items = await res.json();

    commit(SET_ITEMS, items);
    commit(SET_LOADING, false);
  },
}
