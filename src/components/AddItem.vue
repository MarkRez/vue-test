<template>
  <div class="add-item">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title">
      <button type="submit">Add</button>
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
  width: 397px;
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid silver;
}

button {
  padding: 0.4rem 1rem;
  margin-left: 10px;
  border-radius: 20px;
  border: 0;
  background-color: deepskyblue;
  cursor: pointer;
}
</style>
