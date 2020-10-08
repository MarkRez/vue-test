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
import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  name: 'List',
  computed: mapGetters(['allItems', 'itemsLoading']),
  components: {
    AddItem,
    ListItem
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    ...mapActions(['fetchItems']),
    ...mapMutations(['addNewItem', 'deleteItem']),
    addItem(title) {
      this.addNewItem({id: Date.now(), title, completed: false})
    }
  }
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
