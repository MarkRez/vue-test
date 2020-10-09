<template>
  <header>
    <div class="logo">
      <h2>Vue test</h2>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/list">List</router-link>
    <router-link class="login-link" to="/auth/login">Login</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

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
  margin-bottom: 30px;
}

.login-link {
  margin-left: auto;
}

a {
  margin-left: 9px;
  text-decoration: none;
}
</style>
