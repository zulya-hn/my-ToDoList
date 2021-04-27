<template>
  <main>
    <b-container>
      <div class="row">
        <b-col>
          <h2>Saturday</h2>
          <draggable v-model="saturday" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in saturday" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
        <b-col>
          <h2>Sunday</h2>
          <draggable v-model="sunday" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in sunday" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
      </div>
      <br />
      <div class="row text-center">
        <b-col>
          <h2>Other days</h2>
          <draggable v-model="otherDays" group="people" @start="drag = true" @end="drag = false">
            <div v-for="task in otherDays" :key="task.id">{{ task.title }}</div>
          </draggable>
        </b-col>
      </div>
    </b-container>
  </main>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data() {
    return {
      sunday: [
        {
          title: 'Паспорт-инструкция'
        },
        {
          title: 'Альбом типовых решений'
        },
        {
          title: 'Отказное письмо'
        },
        { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
        {
          title: 'ETIM-свойства'
        },
        {
          title: 'ETIM-свойства'
        }
      ],
      saturday: [
        {
          title: 'Паспорт-инструкция'
        },
        {
          title: 'Альбом типовых решений'
        },
        {
          title: 'Отказное письмо'
        },
        { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
        {
          title: 'ETIM-свойства'
        },
        {
          title: 'ETIM-свойства'
        }
      ],
      otherDays: [
        {
          title: 'Паспорт-инструкция'
        },
        {
          title: 'Альбом типовых решений'
        },
        {
          title: 'Отказное письмо'
        },
        { key: 'sertifikat', title: 'Сертификат', link: 'https://ekfgroup.com/uploads/products/E32A76570050D1673D59ECC83E92A0E6.pdf' },
        {
          title: 'ETIM-свойства'
        },
        {
          title: 'ETIM-свойства'
        }
      ]
    }
  }
}
</script>
