<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  props: {
    dayName: String
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.dayName)
      const self = this
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
          day: self.dayName
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>
