<template>
  <div>
    <ul>
      <todo-item v-for="todo of todos" :todo="todo" :key="todo.id"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  props: ['todos'],
  components: {
    TodoItem
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
