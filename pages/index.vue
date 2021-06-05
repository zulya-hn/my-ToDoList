<template>
  <main>
    <b-container>
      <div class="row my-lg-40">
        <b-col class="task-card border-right-0">
          <h2 class="mt-24 text-center">Saturday</h2>
          <TodoItem :dayName="'sat'" />
        </b-col>
        <b-col class="task-card">
          <h2 class="mt-24 text-center">Sunday</h2>
          <TodoItem :dayName="'sun'" />
        </b-col>
      </div>

      <div class="row text-center">
        <b-col class="task-card">
          <h2 class="mt-24 text-center">Other days</h2>
          <TodoItem :dayName="'other'" />
        </b-col>
      </div>
    </b-container>
  </main>
</template>

<script>
import TodoItem from '../components/TodoItem'

export default {
  components: {
    TodoItem
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
