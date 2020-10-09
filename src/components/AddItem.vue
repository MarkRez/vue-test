<template>
  <div class="add-item">
    <form @submit.prevent="onSubmit">
      <div class="flex justify-between">
        <input class="w-full" type="text" v-model="title">
        <button class="outline-none rounded-full bg-teal-400 text-white font-bold w-32" type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      this.title && this.$emit('on-submit', this.title)
      this.title = '';
    }
  }
};
</script>

<style scoped>
.add-item {
  margin-bottom: 20px;
}
input {
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid silver;
}

button {
  padding: 0.4rem 1rem;
  margin-left: 10px;
  border: 0;
  cursor: pointer;
}
</style>
