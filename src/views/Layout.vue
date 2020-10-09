<template>
  <div class="layout">
    <Header/>
    <div class="container mx-auto">
      <transition name="slide">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header';

export default {
  name: 'Layout',
  components: { Header },
};
</script>

<style scoped>
.slide-enter-active, .fslide-leave-active {
  transition: opacity .5s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
