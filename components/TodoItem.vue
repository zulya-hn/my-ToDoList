<template>
  <div>
    <AddTodo @add-todo="addTodo($event, day)" class="my-24" :dayName="dayName" />

    <draggable v-model="days" group="list" @start="drag = true" @end="drag = false" @change="changeElementPosition($event, dayName)">
      <li class="vertical-center" v-for="todo of days" :key="todo.id">
        <span>
          <label :for="todo.id + todo.title" :class="{ done: todo.completed }" @click="changeTodoState(todo)">
            {{ todo.title }}
          </label>
        </span>
        <button class="rm" @click="removeTodo(todo.id, day)">&times;</button>
      </li>
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import AddTodo from '../components/AddTodo'

export default {
  components: {
    Draggable,
    AddTodo
  },
  props: {
    dayName: String
  },
  data() {
    return {
      day: {
        items: []
      }
    }
  },
  mounted() {
    this.getTodosFromStorage()
  },
  computed: {
    days: {
      get() {
        return this.day.items.slice().sort((a, b) => a.completed > b.completed)
      },
      set(value) {
        this.day.items = value
      }
    }
  },
  methods: {
    changeElementPosition(event, day) {
      if (event.added !== undefined) {
        event.added.element.day = day
        const element = event.added.element
        const parsedChange = JSON.stringify(element)
        localStorage.setItem(element.id, parsedChange)
      }
    },
    removeTodo(id, arr) {
      arr.items = arr.items.filter((t) => t.id !== id)
      localStorage.removeItem(id)
    },
    addTodo(todo, arr) {
      console.log(todo)
      arr.items.push(todo)
      const parsed = JSON.stringify(todo)
      localStorage.setItem(todo.id, parsed)
    },
    getTodosFromStorage() {
      const keys = Object.keys(localStorage)

      for (const key of keys) {
        localStorage.getItem(key)
        const todoFromStorage = localStorage.getItem(key)

        try {
          const parsedFromStorage = JSON.parse(todoFromStorage)
          const dayFromStorage = parsedFromStorage.day

          if (dayFromStorage === this.dayName) {
            this.day.items.push(parsedFromStorage)
          }
        } catch (error) {}
      }
    },
    changeTodoState(todo) {
      todo.completed = !todo.completed
      const parsed = JSON.stringify(todo)
      localStorage.setItem(todo.id, parsed)
    }
  }
}
</script>

<style lang="scss">
.task-card {
  border: 2px $gray-300 solid;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

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
