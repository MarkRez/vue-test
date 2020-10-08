<template>
  <header>
    <div class="logo">
      <h2>Vue test</h2>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/list">List</router-link>
  </header>
</template>

<style scoped>
h2 {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 15px;
}

header {
  padding: 15px 20px;
  display: flex;
  background-color: lightgray;
  align-items: center;
  margin-bottom: 30px;
}

a {
  margin-left: 9px;
  text-decoration: none;
}
</style>
