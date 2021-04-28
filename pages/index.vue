<template>
  <main>
    <b-container>
      <div class="row my-40">
        <b-col class="task-card border-right-0">
          <h2>Saturday</h2>
          <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
            <li class="vertical-center" v-for="todo of sat" :key="todo.id">
              <span :class="{ done: todo.completed }">
                <input type="checkbox" v-on:change="todo.completed = true" />
                <strong>
                  {{ todo.id }}
                </strong>
                {{ todo.title }}
              </span>
              <button class="rm">&times;</button>
            </li>
          </draggable>
        </b-col>
        <b-col class="task-card">
          <h2>Sunday</h2>
          <draggable v-model="sunday" group="list" @start="drag = true" @end="drag = false">
            <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
              <li class="vertical-center" v-for="todo of sun" :key="todo.id">
                <span :class="{ done: todo.completed }">
                  <input type="checkbox" v-on:change="todo.completed = true" />
                  <strong>
                    {{ todo.id }}
                  </strong>
                  {{ todo.title }}
                </span>
                <button class="rm">&times;</button>
              </li>
            </draggable>
          </draggable>
        </b-col>
      </div>

      <div class="row text-center">
        <b-col class="task-card">
          <h2>Other days</h2>
          <draggable v-model="otherDays" group="list" @start="drag = true" @end="drag = false">
            <draggable v-model="saturday" group="list" @start="drag = true" @end="drag = false">
              <li class="vertical-center" v-for="todo of other" :key="todo.id">
                <span :class="{ done: todo.completed }">
                  <input type="checkbox" v-on:change="todo.completed = true" />
                  <strong>
                    {{ todo.id }}
                  </strong>
                  {{ todo.title }}
                </span>
                <button class="rm">&times;</button>
              </li>
            </draggable>
          </draggable>
        </b-col>
      </div>
    </b-container>
  </main>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  data() {
    return {
      sat: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Купить масло', completed: false },
        { id: 3, title: 'Купить молоко', completed: false }
      ],
      sun: [
        { id: 1, title: 'Купить колбасу', completed: false },
        { id: 2, title: 'Купить коробку', completed: false },
        { id: 3, title: 'Купить заколку', completed: false }
      ],
      other: [
        { id: 1, title: 'Купить мороженое', completed: false },
        { id: 2, title: 'Купить лампочку', completed: false },
        { id: 3, title: 'Купить ризотто', completed: false }
      ]
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
