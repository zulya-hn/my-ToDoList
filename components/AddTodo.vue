<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  props: {
    day: String
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      // console.log('Submit', this.title)
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
          day: this.day
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>
