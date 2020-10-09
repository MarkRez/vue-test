<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-4 mb-6 shadow-md">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-3xl tracking-tight">Vue</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow flex items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link class="border border-white text-white font-bold py-2 px-4 rounded-lg mr-4" to="/">Home</router-link>
        <router-link class="border border-white text-white font-bold py-2 px-4 rounded-lg mr-4" to="/contacts">Contacts</router-link>
        <router-link class="border border-white text-white font-bold py-2 px-4 rounded-lg mr-4" to="/list">List</router-link>
      </div>
      <div>
        <router-link class="bg-purple-400 text-white border border-purple-400 text-white font-bold py-2 px-4 rounded-lg mr-4" to="/auth/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
a {
  margin-left: 9px;
}
</style>
