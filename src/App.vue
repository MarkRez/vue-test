<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/views/List';
import AddItem from '@/components/AddItem';
export default {
  name: 'App',
  components: {
    AddItem,
    Header,
    List
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

a {
  color: #1444d5;
}

*:focus {
  outline: none;
}

.content {
  padding-left: 40px;
  width: 500px;
}
</style>
