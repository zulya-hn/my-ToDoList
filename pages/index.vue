<template>
  <main>
    <b-container>
      <todo-list :todos="todos" class="mt-40"></todo-list>
      <!-- <div class="row my-40">
        <b-col class="task-card border-right-0">
          <h2>Saturday</h2>
          <draggable v-model="saturday" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in saturday" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
        <b-col class="task-card">
          <h2>Sunday</h2>
          <draggable v-model="sunday" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in sunday" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
      </div>

      <div class="row text-center">
        <b-col class="task-card">
          <h2>Other days</h2>
          <draggable v-model="otherDays" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in otherDays" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
      </div> -->
    </b-container>
  </main>
</template>

<script>
// import Draggable from 'vuedraggable'
import TodoList from '@/components/TodoList'

export default {
  components: {
    // Draggable,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Купить масло', completed: false },
        { id: 3, title: 'Купить молоко', completed: false }
      ]

      // sunday: [
      //   {
      //     title: 'Паспорт-инструкция'
      //   },
      //   {
      //     title: 'Альбом типовых решений'
      //   },
      //   {
      //     title: 'Отказное письмо'
      //   },
      //   { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
      //   {
      //     title: 'ETIM-свойства'
      //   },
      //   {
      //     title: 'ETIM-свойства'
      //   }
      // ],
      // saturday: [
      //   {
      //     title: 'Паспорт-инструкция'
      //   },
      //   {
      //     title: 'Альбом типовых решений'
      //   },
      //   {
      //     title: 'Отказное письмо'
      //   },
      //   { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
      //   {
      //     title: 'ETIM-свойства'
      //   },
      //   {
      //     title: 'ETIM-свойства'
      //   }
      // ],
      // otherDays: [
      //   {
      //     title: 'Паспорт-инструкция'
      //   },
      //   {
      //     title: 'Альбом типовых решений'
      //   },
      //   {
      //     title: 'Отказное письмо'
      //   },
      //   { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
      //   {
      //     title: 'ETIM-свойства'
      //   },
      //   {
      //     title: 'ETIM-свойства'
      //   }
      // ]
    }
  }
}
</script>

<style lang="scss">
.task-card {
  border: 2px $gray-300 solid;
  // &:first-of-type {
  //   border-right: 0;
  // }
}
</style>
