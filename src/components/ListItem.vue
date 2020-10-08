<template>
  <li>
    <input type="checkbox" v-model="item.completed">
    <span :class="{disabled: item.completed}"><b>{{ index+1 }}</b> {{ item.title }}</span>
    <button @click="$emit('remove-item', item.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item', 'index']
};
</script>

<style scoped>
li {
  padding: 5px 10px;
  background-color: #e8e8e8;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}

.disabled {
  text-decoration: line-through;
}

input {
  margin-right: 10px;
}

b{
  margin-right: 5px;
}

button {
  margin-left: auto;
  height: 20px;
  width: 20px;
  line-height: 20px;
  padding: 1px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  background-color: black;
  color: white;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: orangered;
}
</style>
