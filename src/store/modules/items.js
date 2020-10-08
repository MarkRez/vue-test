export default {
  actions: {
    async fetchItems(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const items = await res.json();

      ctx.commit('setItems', items);
      ctx.commit('setLoading', false);
    },
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setLoading(state, status) {
      state.itemsLoading = status
    },
    addNewItem(state, newItem) {
      state.items.push(newItem);
    },
    deleteItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    }
  },
  state: {items: [], itemsLoading: true},
  getters: {
    allItems(state) {
      return state.items;
    },
    itemsLoading(state) {
      return state.itemsLoading;
    }
  }
}
