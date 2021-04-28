<template>
  <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
    <li class="vertical-center">
      <span :class="{ done: todo.completed }">
        <input type="checkbox" v-on:change="todo.completed = true" />
        <!-- <input type="checkbox" v-on:change="completed()" /> -->
        <strong>
          {{ todo.id }}
        </strong>
        {{ todo.title }}
      </span>
      <button class="rm">&times;</button>
    </li>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  data() {
    return {
      todos: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Купить масло', completed: false },
        { id: 3, title: 'Купить молоко', completed: false }
      ]
    }
  }
  // props: {
  //   todo: {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  align-items: center;
}

.rm {
  background: $primary;
  color: $white;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>
