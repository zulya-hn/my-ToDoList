<template>
  <main>
    <b-container>
      <div class="row my-lg-40">
        <b-col class="task-card border-right-0">
          <h2 class="mt-24 text-center">Saturday</h2>
          <AddTodo @add-todo="addTodo($event, sat)" class="my-24" :day="'sat'" />

          <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of sats" :key="todo.id">
              <span>
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }" @click="changeTodoState(todo)">
                  {{ todo.title }}
                </label>
              </span>
              <button class="rm" @click="removeTodo(todo.id, sat)">&times;</button>
            </li>
          </draggable>
        </b-col>
        <b-col class="task-card">
          <h2 class="mt-24 text-center">Sunday</h2>
          <AddTodo @add-todo="addTodo($event, sun)" class="my-24" :day="'sun'" />

          <draggable v-model="sunday" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of sun.items" :key="todo.id">
              <span>
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }" @click="changeTodoState(todo)">
                  {{ todo.title }}
                </label>
              </span>
              <button class="rm" @click="removeTodo(todo.id, sun)">&times;</button>
            </li>
          </draggable>
        </b-col>
      </div>

      <div class="row text-center">
        <b-col class="task-card">
          <h2 class="mt-24 text-center">Other days</h2>
          <AddTodo @add-todo="addTodo($event, other)" class="my-24" :day="'other'" />

          <draggable v-model="otherDays" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of other.items" :key="todo.id">
              <span>
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }" @click="changeTodoState(todo)">
                  {{ todo.title }}
                </label>
              </span>
              <button class="rm" @click="removeTodo(todo.id, other)">&times;</button>
            </li>
          </draggable>
        </b-col>
      </div>
    </b-container>
  </main>
</template>

<script>
import Draggable from 'vuedraggable'
import AddTodo from '../components/AddTodo'

export default {
  components: {
    Draggable,
    AddTodo
  },
  data() {
    return {
      saturday: null,
      sunday: null,
      otherDays: null,
      dayFromStorage: null,
      sat: {
        items: []
      },
      sun: {
        items: []
      },
      other: {
        items: []
      }
    }
  },
  mounted() {
    this.getTodosFromStorage()
  },
  computed: {
    sats() {
      return this.sat.items.slice().sort((a, b) => a.completed > b.completed)
    }
  },
  methods: {
    removeTodo(id, arr) {
      arr.items = arr.items.filter((t) => t.id !== id)
      localStorage.removeItem(id)
    },
    addTodo(todo, arr) {
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

          this[dayFromStorage].items.push(parsedFromStorage)
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
