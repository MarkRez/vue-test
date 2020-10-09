<template>
  <div class="auth-layout">
    <header>
      <h2>Auth vue</h2>
      <router-link class="ml-auto" to="/">Main page</router-link>
    </header>
    <div class="container mx-auto w-3/12">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AuthLayout',
};
</script>

<style scoped>
header {
  display: flex;
  padding: 15px 20px;
  background-color: deepskyblue;
  margin-bottom: 30px;
}

.login-link {
  margin-left: auto;
}

a {
  margin-right: 9px;
  text-decoration: none;
}

h2 {
  margin: 0;
}
</style>
