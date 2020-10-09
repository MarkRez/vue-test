<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import List from '@/views/List';
import AddItem from '@/components/AddItem';

export default {
  name: 'App',
  components: {
    AddItem,
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

header {
  align-items: center;
}

header a {
  background-color: #2b2b2b;
  color: white;
  padding: 6px 14px;
  border: 1px solid #2b2b2b;
  border-radius: 25px;
}

nav .router-link-exact-active {
  background-color: white;
  color: #38b2ac;
}

.el-main {
  padding: 0;
}

a {
  color: #1444d5;
}

*:focus {
  outline: none!important;
}
</style>
