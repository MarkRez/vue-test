<template>
  <div class="list-page">
    <h2>List page</h2>
    <AddItem
      @on-submit="addItem"
    />
    <h4 v-if="itemsLoading">Loading...</h4>
    <ul v-else-if="allItems.length">
      <ListItem
        v-for="(item, i) of allItems"
        :item="item"
        :index="i"
        :key="item.id"
        @remove-item="deleteItem"
      />
    </ul>
    <h4 v-else>List is empty!</h4>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import AddItem from '@/components/AddItem';

import { ADD_NEW_ITEM, DELETE_ITEM, RESET_STATE } from '@/store/modules/items/mutations';
import { createNamespacedHelpers } from 'vuex';
import { FETCH_ITEMS } from '@/store/modules/items/actions';

const { mapMutations, mapActions, mapState } = createNamespacedHelpers('items')

export default {
  name: 'List',
  components: {
    AddItem,
    ListItem
  },
  computed: {
    ...mapState({
      allItems: state => state.items,
      itemsLoading: state => state.itemsLoading
    })
  },
  methods: {
    ...mapActions({
      fetchItems: FETCH_ITEMS,
    }),
    ...mapMutations({
      addNewItem: ADD_NEW_ITEM,
      deleteItem: DELETE_ITEM,
      resetState: RESET_STATE
    }),
    addItem(title) {
      this.addNewItem({
        id: Date.now(),
        title,
        completed: false
      });
    }
  },
  mounted() {
    this.fetchItems();
  },
  destroyed() {
    this.resetState();
  },
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
