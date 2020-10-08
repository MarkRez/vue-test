<template>
  <div class="list-page">
    <h2>List page</h2>
    <AddItem
      @on-submit="addItem"
    />
    <h4 v-if="loading">Loading...</h4>
    <ul v-else-if="listItems.length">
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
export default {
  name: 'List',
  data() {
    return {
      listItems: [],
      loading: true
    };
  },
  components: {
    AddItem,
    ListItem
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((data) => {this.listItems = data; this.loading = false})
  },
  methods: {
    removeItem(id) {
      this.listItems = this.listItems.filter(item => item.id !== id)
    },

    addItem(title) {
      this.listItems.push({id: Date.now(), title, completed: false})
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
