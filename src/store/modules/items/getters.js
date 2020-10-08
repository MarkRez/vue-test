export const ALL_ITEMS = 'ALL_ITEMS'
export const ITEMS_LOADING = 'ITEMS_LOADING'

export default {
  [ALL_ITEMS](state) {
    return state.items;
  },
  [ITEMS_LOADING](state) {
    return state.itemsLoading;
  }
}
