<template>
  <main>
    <b-container>
      <div class="row my-lg-40">
        <b-col class="task-card border-right-0">
          <h2 class="mt-24">Saturday</h2>
          <AddTodo @add-todo="addTodo($event, sat)" class="my-24" />

          <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of sat.items" :key="todo.id">
              <span>
                <input type="checkbox" v-on:change="todo.completed = !todo.completed" :id="todo.id + todo.title" />
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }">
                  {{ todo.title }}
                </label>
              </span>
              <button class="rm" @click="removeTodo(todo.id, sat)">&times;</button>
            </li>
          </draggable>
        </b-col>
        <b-col class="task-card">
          <h2 class="mt-24">Sunday</h2>
          <AddTodo @add-todo="addTodo($event, sun)" class="my-24" />

          <draggable v-model="sunday" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of sun.items" :key="todo.id">
              <span>
                <input type="checkbox" v-on:change="todo.completed = !todo.completed" :id="todo.id + todo.title" />
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }">
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
          <h2 class="mt-24">Other days</h2>
          <AddTodo @add-todo="addTodo($event, other)" class="my-24" />

          <draggable v-model="otherDays" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of other.items" :key="todo.id">
              <span>
                <input type="checkbox" v-on:change="todo.completed = !todo.completed" :id="todo.id + todo.title" />
                <label :for="todo.id + todo.title" :class="{ done: todo.completed }">
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
      sat: {
        items: [
          { id: 1, title: 'Купить хлеб', completed: false },
          { id: 2, title: 'Купить масло', completed: false },
          { id: 3, title: 'Купить молоко', completed: false }
        ]
      },
      sun: {
        items: [
          { id: 1, title: 'Купить колбасу', completed: false },
          { id: 2, title: 'Купить коробку', completed: false },
          { id: 3, title: 'Купить заколку', completed: false }
        ]
      },
      other: {
        items: [
          { id: 1, title: 'Купить мороженое', completed: false },
          { id: 2, title: 'Купить лампочку', completed: false },
          { id: 3, title: 'Купить ризотто', completed: false }
        ]
      }
    }
  },
  methods: {
    removeTodo(id, arr) {
      arr.items = arr.items.filter((t) => t.id !== id)
    },
    addTodo(todo, arr) {
      console.log(todo)
      arr.items.push(todo)
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
